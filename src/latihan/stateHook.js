import React, { useState } from 'react';

//----- Hook on function -----

export function StateHook() {
  	// Deklarasi variabel state baru yang kita sebut "count" dan memberikan nilai 0 ke state count
  	const [count, setCount] = useState(0);

  	return (
    	<div>
      		<p>Anda menekan sebanyak {count} kali</p>
      		<button onClick={() => setCount(count + 1)}>
        		Klik saya
      		</button>
    	</div>
  	)
}

