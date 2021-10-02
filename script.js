{
  const ar = Array.from(document.querySelectorAll('path[data-info]')).map(el => {
    const json = JSON.parse(el.getAttribute('data-info'))
    return {
        isotop: json.nucid,
        isotop_name: json.isotopName,
        isotop_symbol: json.isotopNameKurz,
        metastabil: json.metastabil,
        neutronen: json.n,
        masse: json.atommasse,
        halbwertszeit: json.halbwertszeit,
        zerfall: json.wahrsch.map((val, ind) => {
            return {
                art: val[0],
                wahrsch: val[2].split('%')[0],
                energie: Number(json.energien ? json.energien[ind] ? json.energien[1] : null : null)
            }
        }),
        zerfall: json.zerfall
    }
})
const br = []
ar.forEach(li => {
  const elsymb = li.isotop_symbol.split(' ')[0]
  if (br.length != 0 && br[br.length - 1].element.symbol == elsymb) {
    br[br.length - 1].isotopes.push(li)
  } else {
    br.push({
      element: {
        name: li.isotop_name.split(' ').filter((val, ind, arr) => ind != (arr.length - 1)).join(' '),
      symbol: elsymb
      },
      isotopes: [
            li
            ]
    })
  }
})

const blob = new Blob([JSON.stringify(br)])
const a = document.createElement('a')
a.href = URL.createObjectURL(blob)
a.download = 'nuklidkarte.json'
a.click()
}
