function displayData(data)
{
    display.value=display.value+data
}
function allClear()
{
    display.value=" "
}
function output()
{
  display.value=eval(display.value)
}
function backspace()
{
  display.value=display.value.slice(0,-1)
}