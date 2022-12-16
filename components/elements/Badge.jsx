import React from "react";

let Badge = (props) => {
  const colors = ['blue', 'gray', 'red', 'green', 'yellow', 'indigo', 'purple', 'pink']
  const color = colors.includes(props.color) ? props.color : colors[0]

  return (
    <span
      className={`bg-${color}-100 text-${color}-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-${color}-200 dark:text-${color}-800`}
    >
      {props.text}
    </span>
  );
}

export default Badge;