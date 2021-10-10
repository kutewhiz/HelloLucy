function HomePage() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 style={{ fontFamily: 'fantasy', color: '#000000' }}>
        snowfox's website!!
      </h1>
      <h2
        style={{
          fontFamily: 'cursive',
          color: 'gold',
          marginBottom: '10rem'
        }}
      >
        Hey there! Click the buttons below!
      </h2>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'black',
          color: 'white'
        }}
        onClick={() => alert('Hello there')}
      >
        Welcome
      </button>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'gold',
          color: 'black',
          marginTop: '2rem'
        }}
        onClick={() => {
          let name = prompt("What's your name?");
          if (name) {
            alert('Nice to meet you, ' + name + '!');
          } else {
            alert('Nice to meet you, someone who doesn't say their name!);
          }
        }}
      >
        {"What's your name?"}
      </button>
      <button
      style+{{ 
        fontFamily: 'monospace',
        padding:'1rem',
        fontSize:'2rem',
        background;'black',
        color:'white',
        marginTop:'2rem'
          }
        }}
      >
      </button>  
    </div>
  );
}

export default HomePage;
