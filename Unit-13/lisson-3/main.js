
const changedOption = () => {
 const value = document.getElementById("electric").value
  if (value === 'laptop') {
    document.getElementById('showOptionLaptop').style.display = 'block'
    document.getElementById('showOptionPhone').style.display = 'none'
    document.getElementById('showOptionTV').style.display = 'none'
  } else if (value === 'phone') {
    document.getElementById('showOptionPhone').style.display = 'block'
    document.getElementById('showOptionLaptop').style.display = 'none'
    document.getElementById('showOptionTV').style.display = 'none'
  } else {
    document.getElementById('showOptionTV').style.display = 'block'
    document.getElementById('showOptionPhone').style.display = 'none'
    document.getElementById('showOptionLaptop').style.display = 'none'
  }
}
