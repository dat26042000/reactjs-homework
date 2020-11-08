const handleOnMouseClick = event => {
    const currentEle = event.target
    if (currentEle.style.background === 'red') {
      currentEle.style.background = 'green'
    } else {
      currentEle.style.background = 'red'
    }
  }
  