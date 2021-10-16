import React from 'react'

function loading() {
    return (
        <React.Fragment>
            {/* <div class="item loading-1">
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em">
    <circle cx="0.6em" cy="0.6em" r="0.5em" class="circle"/>
    </svg>
    <div>.loading-1</div>
  </div> */}
  <div class="loading">
  <div class="arc"></div>
  <div class="arc"></div>
  <div class="arc"></div>
</div>
        </React.Fragment>
    )
}

export default loading
