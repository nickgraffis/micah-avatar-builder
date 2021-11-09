export const selectableStyleProps = ({ width, height }: { width: number, height: number }) => {
  return {
    width: width / 4,
    height: height / 4, 
    className: "selectable-style"
  }
}