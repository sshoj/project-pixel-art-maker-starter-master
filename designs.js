
/* Udacity " Grow with Google Challenge Scholarship: Front-End Web Dev" project/
@Author "Seyyed Saeed Hojabrossadati"*/
Var PixCan=$('#pixelCanvas');
//Event listener for calling makeGride function on clicking button.
$('#button').on("click",function makeGrid() {
  //reset the table for next enter
  $('table').empty();
  event.preventDefault();
  //loop for making table
  let inHeight=$('#inputHeight').val();
  let inWidth=$('#inputWidth').val();
  for (let row=0;row<inHeight;row++){
   PixCan.append('<tr></tr>')};
  for (let col=0;col<inWidth;col++){
    $('tr').append('<td></td>')};
 })

 //assinging color value on table's event listener
 PixCan.on('click', "td", function(clk) {
    let colors=$('#colorPicker').val();
    if (clk.which === 1) {
      $(this).css("background", colors);
    }
  });
