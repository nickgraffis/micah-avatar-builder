import * as utils from './utils';
import { AvatarPreBuild, MetaData, CreateAvatarInputOptions, MicahAvatar, MicahColor } from './types';

export function createAvatar(
  prebuild: AvatarPreBuild, 
  additionalAttributes: { meta: MetaData, options: CreateAvatarInputOptions<MicahAvatar> }
): string {

  if (additionalAttributes.options.size) {
    prebuild.attributes.width = additionalAttributes.options.size.toString();
    prebuild.attributes.height = additionalAttributes.options.size.toString();
  }

  prebuild.body = 
    utils.svg.addBackgroundColor(
      prebuild, 
      additionalAttributes?.options?.avatar?.background.color as MicahColor
    );

  prebuild.body = utils.svg.addViewboxMask(prebuild);
  let avatar = `
  <svg ${utils.svg.createAttrString(prebuild.attributes)}>
    ${utils.svg.getMetadata(additionalAttributes.meta)}
    ${prebuild.attributes.head ?? ''}
    ${prebuild.body}
  </svg>
`;

  return avatar;
}
