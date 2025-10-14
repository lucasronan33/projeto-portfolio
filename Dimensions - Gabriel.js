function inserirMedida(text, casaDecimal, extMedida, fontColor) {

    var doc = app.activeDocument
    var sel = doc.selection
    try {
        for (var i = 0; i < sel.length; i++) {
            var item = sel[i]

            if (item.clipped) {
                for (var j = 0; j < item.pageItems.length; j++) {
                    if (item.pageItems[j].clipping) {
                        item = item.pageItems[j]
                        break
                    }
                }

            }
            var dimSelection = convertUnit(item.width, item.height, extMedida)

            var fillColor = cmyk(
                fontColor[0],
                fontColor[1],
                fontColor[2],
                fontColor[3]
            )

            var texto = doc.textFrames.add()
            texto.contents = text +
                dimSelection.width.toFixed(casaDecimal).replace('.', ',') +
                ' x ' + dimSelection.height.toFixed(casaDecimal).replace('.', ',') +
                ' ' +
                extMedida
            texto.position = [item.position[0], item.position[1] + 15]
            texto.textRange.characterAttributes.fillColor = fillColor
            texto.textRange.characterAttributes.textFont = app.textFonts.getByName("Gotham-Bold");


        }
        alert('Medida inserida com sucesso!')
    }
    catch (error) {
        alert(error)
    }
}

function convertUnit(objW, objH, unit) {
    var width = new UnitValue(objW, "pt").as(unit)
    var height = new UnitValue(objH, "pt").as(unit)

    return { width: width, height: height }
}
function cmyk(c, m, y, k) {
    var cmyk = new CMYKColor()
    cmyk.cyan = c
    cmyk.magenta = m
    cmyk.yellow = y
    cmyk.black = k

    return cmyk
}

function janela() {
    var window = new Window('dialog', 'Dimensions - Gabriel')

    var painel = window.painel
    painel = window.add('group')
    painel.orientation = 'column'

    var gpButtonsFinal = painel.gpButtonsFinal
    gpButtonsFinal = painel.add('panel', undefined, 'Final: ')
    gpButtonsFinal.orientation = 'row'

    gpButtonsFinal.btnCM = gpButtonsFinal.add('button', undefined, 'cm')
    gpButtonsFinal.btnM = gpButtonsFinal.add('button', undefined, 'm')


    var gpButtonsPrint = painel.gpButtonsPrint
    gpButtonsPrint = painel.add('panel', undefined, 'Impressão: ')
    gpButtonsPrint.orientation = 'row'

    gpButtonsPrint.btnCM = gpButtonsPrint.add('button', undefined, 'cm')
    gpButtonsPrint.btnMM = gpButtonsPrint.add('button', undefined, 'mm')

    gpButtonsFinal.btnCM.onClick = function () {
        inserirMedida('Final: ', 1, 'cm', [0, 100, 0, 0])
        window.close()
    }
    gpButtonsFinal.btnM.onClick = function () {
        inserirMedida('Final: ', 2, 'm', [0, 100, 0, 0])
        window.close()
    }

    gpButtonsPrint.btnCM.onClick = function () {
        inserirMedida('Impressão: ', 1, 'cm', [100, 0, 0, 0])
        window.close()
    }
    gpButtonsPrint.btnMM.onClick = function () {
        inserirMedida('Impressão: ', 0, 'mm', [100, 0, 0, 0])
        window.close()
    }
    window.show()
}
janela()