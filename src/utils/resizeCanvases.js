// TODO Add typings later
export default (zoom = 0.5) => {
  var canvasCollection = document.getElementsByTagName('canvas')
  var canvases = [].slice.call(canvasCollection);

  canvases.forEach(myCanvas => {
    var cw = myCanvas.width
    var ch = myCanvas.height
    var tempCanvas = document.createElement("canvas")
    tempCanvas.width = cw
    tempCanvas.height = ch
    var tctx = tempCanvas.getContext("2d")
  
    function resizeTo (canvas, pct) {
      var cw = canvas.width
      var ch = canvas.height
      tempCanvas.width = cw
      tempCanvas.height = ch
      tctx.drawImage(canvas, 0, 0)
      canvas.width *= pct
      canvas.height *= pct
      var ctx = canvas.getContext('2d')
      ctx.drawImage(tempCanvas, 0, 0, cw, ch, 0, 0, cw * pct, ch * pct)
    }
  
    resizeTo(myCanvas, zoom)
  })
}