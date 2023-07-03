interface cnObjType {
  [className: string]: boolean;
}

// 다수의 classname 사용, 또는 conditional classname을 위해 사용
// ex)
// className={cn('bold text-black')}
// className={cn('bold', { active: selectedItem === item })}
// className={cn('bold cursor-pointer', { 'active text-green': selectedItem === item })}
export const cn = (...arg: (string | cnObjType | undefined | false)[]) => {
  let classNames: string[] = [];

  arg.map((el) => {
    if (typeof el === "string") {
      classNames.push(el);
    } else if (typeof el === "object") {
      for (const [className, display] of Object.entries(el)) {
        if (display) {
          classNames.push(className);
        }
      }
    }
  });

  return classNames.join(" ");
};
