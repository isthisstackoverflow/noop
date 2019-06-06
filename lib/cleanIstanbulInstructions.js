/**
 * Since the istanbul coverage writer may inject code into functions, it has to be cleaned for the implementation check.
 * To test the coverage of noop, an op is injected, effectively breaking the function.
 * @param {String} s string to clean from istanbul instructions
 * @returns {String} cleaned function
 */
export default s =>
  s.includes('/* istanbul ignore next */')
    ? s
      .replace('  /* istanbul ignore next */\n', '')
      .replace(/\n\s+cov_.*\+\+;\n/g, '')
    : s
