window.function = function (test) {
  if (!test.value || !test.value.length) {
    return []
  }
  return test.value.split(';')
}
