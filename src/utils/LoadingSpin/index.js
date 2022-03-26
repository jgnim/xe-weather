import styled from "styled-components"
const LoadingSpin = () => {
  return (
    <Load className="lds-dual-ring"></Load>
  )
}

export default LoadingSpin

const Load = styled.div`
 &.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
&.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff black #fff black;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

}
`