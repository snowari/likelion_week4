function Wrapper(props) {
  const style = {
    border: '2px solid gray',
    padding: '16px',
  };

  return (
    <div style={style}>
			{props.children}
    </div>
  )
}

export default Wrapper;