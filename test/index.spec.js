import noop from 'src/index.js'
import cleanIstanbulInstructions from 'lib/cleanIstanbulInstructions.js'

describe('noop', () => {
  it('is a function despite not being an operation', () => {
    expect(typeof noop).toBe('function')
  })

  it('returns undefined', () => {
    expect(noop()).toBeUndefined()
  })

  it('has no side effects (probably)', () => {
    const holdMyBeer = [global, window, document]
    ;[global, window, document, console] = [null, null, null, null] // eslint-disable-line
    noop()
    ;[global, window, document, console] = holdMyBeer // eslint-disable-line
    // but do we really know it has no side effects from hiding globals? maybe it does a null check ...
  })

  it('has no internal effects either', () => {
    // is nailing the implementation down like this too harsh?
    expect(cleanIstanbulInstructions(noop.toString())).toBe('() => {}')
  })
})
