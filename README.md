sfdfkjhgudg7cgf;
jgifdghfudhgyu;
dhuytrbtcdeg;
dugyugtsbg4;
yrnsxbzvcxbd98;
gthxcvbn56;
gfsbhryjsfgadr;
gdaghfdhgfdhj;

fjdshdfohs
fjdshdfohsfd

// setTimeout(() => {
// const firstBtn = document.querySelector(".fjdshdfohs");
// const secondBtn = document.querySelector(".fjdshdfohsfd");
// let i = true;
// function cl(activ, pasiv, is) {
// pasiv.classList.remove("color-red-active");
// pasiv.classList.add("color-red-d");
// i = is;
// activ.classList.remove("color-red-d");
// activ.classList.add("color-red-active");
// function mv(target) {
// target.classList.remove("color-red-d");
// target.classList.add("color-red-active");
// console.log("fd");
// }
// function mo(target) {
// target.classList.remove("color-red-active");
// target.classList.add("color-red-d");
// console.log("fds");
// }

// function remover(target, e1, e2, e3) {
// target.removeEventListener("click");
// target.removeEventListener("mouseover");
// target.removeEventListener("mouseout");
// }
// function adder(target, e1, e2, e3) {
// target.addEventListener("click", e1);
// target.addEventListener("mouseover", e2);
// target.addEventListener("mouseout", e3);
// }
// if (i == true) {
// remover(
// firstBtn,
// cl(firstBtn, firstBtn, false),
// mv(firstBtn),
// mo(firstBtn)
// );
// adder(
// secondBtn,
// cl(firstBtn, secondBtn, false),
// mv(firstBtn),
// mo(firstBtn)
// );
// } else if (i == false) {
// remover(
// secondBtn,
// cl(firstBtn, secondBtn, false),
// mo(secondBtn),
// mv(secondBtn)
// );
// adder(
// firstBtn,
// cl(firstBtn, firstBtn, false),
// mo(firstBtn),
// mv(firstBtn)
// );
// }
// }
// console.log(firstBtn);
// console.log(secondBtn);
// }, 1500);
// // firstBtn.classList.remove("color-red-active");
// // firstBtn.classList.add("color-red-d");

setTimeout(() => {
const firstBtn = document.querySelector(".fjdshdfohs");
const secondBtn = document.querySelector(".fjdshdfohsfd");
let i = true;

// // function cl(activ, pasiv) {
// // pasiv.classList.remove("color-red-active");
// // pasiv.classList.add("color-red-d");

// // activ.classList.remove("color-red-d");
// // activ.classList.add("color-red-active");
// // console.log(activ);
// // console.log(pasiv);
// // console.log(i);
// // }

// function mv(target) {
// target.classList.remove("color-red-d");
// target.classList.add("color-red-active");
// console.log("fd");
// }
// function mo(target) {
// target.classList.remove("color-red-active");
// target.classList.add("color-red-d");
// console.log("fds");
// }

// function remover(target, e1, e2, e3) {
// target.removeEventListener("click");
// target.removeEventListener("mouseover");
// target.removeEventListener("mouseout");
// }
function cl1() {
firstBtn.classList.remove("color-red-active");
firstBtn.classList.add("color-red-d");
i = false;
secondBtn.classList.remove("color-red-d");
secondBtn.classList.add("color-red-active");
console.log(firstBtn);
console.log(secondBtn);
console.log(i);
}
function mv1() {
secondBtn.classList.remove("color-red-d");
secondBtn.classList.add("color-red-active");
console.log("fd");
}
function mo1() {
secondBtn.classList.remove("color-red-active");
secondBtn.classList.add("color-red-d");
console.log("fds");
}
if (i == true) {
secondBtn.addEventListener("click", cl1());
secondBtn.addEventListener("mouseover", mv1());
secondBtn.addEventListener("mouseout", mo1());
} else if (i == false) {
secondBtn.removeEventListener("click");
secondBtn.removeEventListener("mouseover");
secondBtn.removeEventListener("mouseout");
}

console.log(firstBtn);
console.log(secondBtn);
}, 1500)

setTimeout(() => {
const firstBtn = document.querySelector(".fjdshdfohs");
const secondBtn = document.querySelector(".fjdshdfohsfd");
const valFsIng = document.querySelector(".yrnsxbzvcxbd98");
const valFrIng = document.querySelector(".gfsbhryjsfgadr");
const valSecIng = document.querySelector(".gthxcvbn56");
const fortSecIng = document.querySelector(".sfdfkjhgudg7cgf");
const fortFsIng = document.querySelector(".gdaghfdhgfdhj");
const csFsIng = document.querySelector(".jgifdghfudhgyu");
const csSecIng = document.querySelector(".dhuytrbtcdeg");
const csFrIng = document.querySelector(".dugyugtsbg4 ");

if (localStorage.getItem("i18nextLng") == "en") {
//en
firstBtn.classList.remove("color-red-active");
firstBtn.classList.add("color-red-d");
//img
try {
valFsIng.src = "img/n/Без имени-2.png";
console.log(valFsIng.src);
valSecIng.src = "img/n/eng.jpg";
console.log(valSecIng.src);
valFrIng.src = "img/n/newv.png";
console.log(valFrIng.src);
} catch (error) {
console.log(error);
}
try {
fortSecIng.src = "img/n/best.png";
console.log(fortSecIng.src);
fortFsIng.src = "img/n/new.png";
console.log(fortFsIng.src);
} catch (error) {
console.log(error);
}
try {
csFsIng.src = "img/n/Без имени-1.png";
console.log(csFsIng.src);
csSecIng.src =
"img/n/1BdSsorM_6MGMQb2GMAe_gKX2NQQtdeuG-epThzQT_vFr8r9sk-edbOJ9J3g7JEEi5D7BNBw_1JUSWpn4Q0FMB7e.jpg";

      console.log(csSecIng.src);
      csFrIng.src = "img/n/НОВИНКА_1Ъ.png";
      console.log(csFrIng.src);
    } catch (error) {
      console.log(error);
    }

    secondBtn.classList.remove("color-red-d");
    secondBtn.classList.add("color-red-active");

}

if (localStorage.getItem("i18nextLng") == "ru") {
//ru
secondBtn.classList.remove("color-red-active");
secondBtn.classList.add("color-red-d");
//img
try {
valFsIng.src = "img/val.png";
valSecIng.src = "img/Без имени-2.jpg";
valFrIng.src = "./img/novinka**144 (1).png";
console.log(valFsIng.src);
console.log(valSecIng.src);
console.log(valFrIng.src);
} catch (error) {
console.log(error);
}
try {
fortSecIng.src =
"img/chto_by_igrat_luchshe_nado_uchitsya_u_luchshikh**143.png";
fortFsIng.src = "./img/sloy_21_141.png";
console.log(fortSecIng.src);
console.log(fortFsIng.src);
} catch (error) {
console.log(error);
}
try {
csFsIng.src = "img/cs-frafth.png";
csSecIng.src = "img/cs-frath2.png";
csFrIng.src = "./img/novinka\_\_144 (2).png";
console.log(csFsIng.src);
console.log(csSecIng.src);
console.log(csFrIng.src);
} catch (error) {
console.log(error);
}
firstBtn.classList.remove("color-red-d");
firstBtn.classList.add("color-red-active");
}

secondBtn.addEventListener("click", function cl1() {
localStorage.setItem("leng", "en");
// en
try {
valFsIng.src = "img/n/Без имени-2.png";
console.log(valFsIng.src);
valSecIng.src = "img/n/eng.jpg";
console.log(valSecIng.src);
valFrIng.src = "img/n/newv.png";
console.log(valFrIng.src);
} catch (error) {
console.log(error);
}
try {
fortSecIng.src = "img/n/best.png";
console.log(fortSecIng.src);
fortFsIng.src = "img/n/new.png";
console.log(fortFsIng.src);
} catch (error) {
console.log(error);
}
try {
csFsIng.src = "img/n/Без имени-1.png";
console.log(csFsIng.src);
csSecIng.src =
"img/n/1BdSsorM_6MGMQb2GMAe_gKX2NQQtdeuG-epThzQT_vFr8r9sk-edbOJ9J3g7JEEi5D7BNBw_1JUSWpn4Q0FMB7e.jpg";

      console.log(csSecIng.src);
      csFrIng.src = "img/n/НОВИНКА_1Ъ.png";
      console.log(csFrIng.src);
    } catch (error) {
      console.log(error);
    }

    firstBtn.classList.remove("color-red-active");
    firstBtn.classList.add("color-red-d");
    i = false;
    secondBtn.classList.remove("color-red-d");
    secondBtn.classList.add("color-red-active");
    console.log(firstBtn);
    console.log(secondBtn);
    console.log(i);

});

firstBtn.addEventListener("click", function cl2() {
localStorage.setItem("leng", "ru");
//img
try {
valFsIng.src = "img/val.png";
valSecIng.src = "img/Без имени-2.jpg";
valFrIng.src = "./img/novinka**144 (1).png";
console.log(valFsIng.src);
console.log(valSecIng.src);
console.log(valFrIng.src);
} catch (error) {
console.log(error);
}
try {
fortSecIng.src =
"img/chto_by_igrat_luchshe_nado_uchitsya_u_luchshikh**143.png";
fortFsIng.src = "./img/sloy_21_141.png";
console.log(fortSecIng.src);
console.log(fortFsIng.src);
} catch (error) {
console.log(error);
}
try {
csFsIng.src = "img/cs-frafth.png";
csSecIng.src = "img/cs-frath2.png";
csFrIng.src = "./img/novinka\_\_144 (2).png";
console.log(csFsIng.src);
console.log(csSecIng.src);
console.log(csFrIng.src);
} catch (error) {
console.log(error);
}
//
secondBtn.classList.remove("color-red-active");
secondBtn.classList.add("color-red-d");
i = true;
firstBtn.classList.remove("color-red-d");
firstBtn.classList.add("color-red-active");
console.log(secondBtn);
console.log(firstBtn);
console.log(i);
});

console.log(secondBtn);
}, 1500);

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
