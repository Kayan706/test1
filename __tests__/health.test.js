import getHealthStatus from '../src/health'

test('health > 50', ()=>{
    const res = getHealthStatus({name: 'Маг', health: 90})
    expect(res).toBe('healthy')
})

test('health = 50', ()=>{
    const res = getHealthStatus({name: 'Маг', health: 50})
    expect(res).toBe('wounded')
})


test('health > 15', ()=>{
    const res = getHealthStatus({name: 'Маг', health: 15})
    expect(res).toBe('wounded')
})

test('health > 15', ()=>{
    const res = getHealthStatus({name: 'Маг', health: 14})
    expect(res).toBe('critical')
})