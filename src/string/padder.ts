export {
  leftPad,
  rightPad
}

function leftPad(input: string, maxLength: number, char?: string): string {

  const padLength: number = maxLength - input.length

  if (padLength <= 0) {
    return input
  }

  const pad: string = buildPad(padLength, char)

  return pad + input
}

function rightPad(input: string, maxLength: number, char?: string): string {

  const padLength: number = maxLength - input.length

  if (padLength <= 0) {
    return input
  }

  const pad: string = buildPad(padLength, char)

  return input + pad
}

function buildPad(padLength: number, char: string): string {

  if (char === undefined) {
    char = ' '
  }

  var pad: string = ''

  for (var i = 0; i < padLength; i++) {
    pad += char
  }

  return pad
}
