import { colorMap } from "../color-map";
import { MetaData, AvatarPreBuild, MicahColor, CreateAvatarInputOptions, MicahAvatar } from "../types";

type CreateGroupProps = {
  children: string;
  x: number;
  y: number;
};

const ccLicenses: Record<string, { permits: string[]; requires: string[]; prohibits: string[] }> = {
  by: {
    permits: ['Reproduction', 'Distribution', 'DerivativeWorks'],
    requires: ['Notice', 'Attribution'],
    prohibits: [],
  },
  'by-sa': {
    permits: ['Reproduction', 'Distribution', 'DerivativeWorks'],
    requires: ['Notice', 'Attribution', 'ShareAlike'],
    prohibits: [],
  },
  'by-nd': {
    permits: ['Reproduction', 'Distribution'],
    requires: ['Notice', 'Attribution'],
    prohibits: [],
  },
  'by-nc': {
    permits: ['Reproduction', 'Distribution', 'DerivativeWorks'],
    requires: ['Notice', 'Attribution'],
    prohibits: ['CommercialUse'],
  },
  'by-nc-sa': {
    permits: ['Reproduction', 'Distribution', 'DerivativeWorks'],
    requires: ['Notice', 'Attribution', 'ShareAlike'],
    prohibits: ['CommercialUse'],
  },
  'by-nc-nd': {
    permits: ['Reproduction', 'Distribution'],
    requires: ['Notice', 'Attribution'],
    prohibits: ['CommercialUse'],
  },
  zero: {
    permits: ['Reproduction', 'Distribution', 'DerivativeWorks'],
    requires: [],
    prohibits: [],
  },
};

export function createGroup({ children, x, y }: CreateGroupProps) {
  return `<g transform="translate(${x}, ${y})">${children}</g>`;
}

export function getXmlnsAttributes() {
  return {
    'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
    'xmlns:cc': 'http://creativecommons.org/ns#',
    'xmlns:rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    'xmlns:svg': 'http://www.w3.org/2000/svg',
    xmlns: 'http://www.w3.org/2000/svg',
  };
}

export function getMetadata(meta: MetaData) {
  return `
    <metadata>
      <rdf:RDF>
        <cc:Work>
          <dc:format>image/svg+xml</dc:format>
          <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
          ${getMetadataWorkTitle(meta.title)}
          ${getMetadataWorkCreator(meta.creator)}
          ${getMetadataWorkSource(meta.source)}
          ${getMetadataWorkLicense(meta.license)}
        </cc:Work>
        ${getMetadataLicense(meta.license)}
      </rdf:RDF>
    </metadata>
  `;
}

export function getMetadataWorkTitle(title: string) {
  if (title) return `<dc:title>${title}</dc:title>`;

  return '';
}

export function getMetadataWorkCreator(creator: string) {
  if (creator) {
    let creators = Array.isArray(creator) ? creator : [creator];

    return `
      <dc:creator>
        ${getMetadataWorkAgents(creators)}
      </dc:creator>
    `;
  }

  return '';
}

export function getMetadataWorkSource(source: string) {
  if (source) return `<dc:source>${source}</dc:source>`;

  return '';
}

export function getMetadataWorkLicense(license: { name: string, url: string }) {
  if (license) return `<cc:license rdf:resource="${license.url}" />`;

  return '';
}

export function getMetadataWorkContributor(contributor: string) {
  if (contributor) {
    let contributors = Array.isArray(contributor) ? contributor : [contributor];

    return `
      <dc:contributor>
        ${getMetadataWorkAgents(contributors)}
      </dc:contributor>
    `;
  }

  return '';
}

export function getMetadataWorkAgents(agents: string[]) {
  return agents.map(
    (agent) => `
      <cc:Agent>
        <dc:title>${agent}</dc:title>
      </cc:Agent>
    `
  );
}

export function getMetadataLicense(license: { name: string, url: string }) {
  let match = license?.url.match(
    /^https?:\/\/creativecommons.org\/(?:licenses|publicdomain)\/([a-z\-]+)\/\d.\d\//
  );

  if (match) {
    let licenseRegEx = ccLicenses[match[1]];

    if (licenseRegEx) {
      let result = ``;

      licenseRegEx.permits.forEach((permits) => {
        result += `<cc:permits rdf:resource="https://creativecommons.org/ns#${permits}" />`;
      });

      licenseRegEx.requires.forEach((requires) => {
        result += `<cc:requires rdf:resource="https://creativecommons.org/ns#${requires}" />`;
      });

      licenseRegEx.prohibits.forEach((prohibits) => {
        result += `<cc:prohibits rdf:resource="https://creativecommons.org/ns#${prohibits}" />`;
      });

      return `
        <cc:License rdf:about="${license?.url}">
          ${result}
        </cc:License>
      `;
    }
  }

  return '';
}

export function getViewBox(avatar: AvatarPreBuild) {
  let viewBox = avatar.attributes['viewBox'].split(' ');
  let x = parseInt(viewBox[0]);
  let y = parseInt(viewBox[1]);
  let width = parseInt(viewBox[2]);
  let height = parseInt(viewBox[3]);

  return {
    x,
    y,
    width,
    height,
  };
}

export function addBackgroundColor(avatar: AvatarPreBuild, color: MicahColor) {
  let { width, height, x, y } = getViewBox(avatar);

  return `
    <rect fill="${colorMap[color as MicahColor]}" width="${width}" height="${height}" x="${x}" y="${y}" />
    ${avatar.body}
  `;
}

export function addViewboxMask(avatar: AvatarPreBuild, options: CreateAvatarInputOptions<MicahAvatar>) {
  let { width, height } = getViewBox(avatar);
  let shape = options?.shape || 'circle';
  return `
    <mask id="avatarsRadiusMask" width="${width * 2}" height="${height * 2}">
      ${shape === 'circle' && `<circle cx="${width / 2}" cy="${width / 2}" r="${width / 2}" fill="#fff" />`}
      ${shape === 'square' && `<rect x="0" width="${width}" height="${height}" rx="15" fill="#fff" />`}
    </mask>
    <g mask="url(#avatarsRadiusMask)">
      ${avatar.body}
    </g>
  `;
}

const XML_CHAR_MAP: { [key: string]: string } = {
	'<': '&lt;',
	'>': '&gt;',
	'&': '&amp;',
	'"': '&quot;',
	"'": '&apos;'
};

function escapeXml (s: string) {
	return s.replace(/[<>&"']/g, function (ch) {
		return XML_CHAR_MAP[ch];
	});
}

export function createAttrString(attributes: any): string {
  attributes = { ...getXmlnsAttributes(), ...attributes };

  return Object.keys(attributes)
    .map((attr) => `${escapeXml(attr)}="${escapeXml(attributes[attr])}"`)
    .join(' ');
}

export function removeWhitespace(svg: string): string {
  return (
    svg
      // Remove spaces at both ends of the string
      .trim()
      // Remove breaking lines
      .replace(/\n/g, ' ')
      // Remove space between tags
      .replace(/>\s+</g, '><')
      // Reduce whitespace
      .replace(/\s{2,}/g, ' ')
      // Create self closing tags
      .replace(/<([^\/>]+)><\/[^>]+>/gi, '<$1/>')
      // Remove whitespace before tag close
      .replace(/\s(\/?>)/g, '$1')
  );
}
