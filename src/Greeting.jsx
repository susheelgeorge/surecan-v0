import React from 'react';

function Greeting({ name }) {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <div className="text-2xl font-bold mb-4">
      {greeting}, {name}!
    </div>
  );
}

export default Greeting;