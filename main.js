const lift = document.querySelector(".lift");

let floorBtn = document.querySelectorAll(".buttons button");

let doors = document.querySelectorAll("div .door");

for (i = 0; i < 15; i++) {
    doors[i].classList.add = `d${i}`;
    console.log(doors[i]);
}

floorBtn[0].addEventListener("click", () => {
    lftFloor.toFloor(0);
});

floorBtn[1].addEventListener("click", () => {
    lftFloor.toFloor(1);
});
floorBtn[2].addEventListener("click", () => {
    lftFloor.toFloor(2);
});
floorBtn[3].addEventListener("click", () => {
    lftFloor.toFloor(3);
});
floorBtn[4].addEventListener("click", () => {
    lftFloor.toFloor(4);
});
floorBtn[5].addEventListener("click", () => {
    lftFloor.toFloor(5);
});
floorBtn[6].addEventListener("click", () => {
    lftFloor.toFloor(6);
});
floorBtn[7].addEventListener("click", () => {
    lftFloor.toFloor(7);
});
floorBtn[8].addEventListener("click", () => {
    lftFloor.toFloor(8);
});
floorBtn[9].addEventListener("click", () => {
    lftFloor.toFloor(9);
});
floorBtn[10].addEventListener("click", () => {
    lftFloor.toFloor(10);
});
floorBtn[11].addEventListener("click", () => {
    lftFloor.toFloor(11);
});
floorBtn[12].addEventListener("click", () => {
    lftFloor.toFloor(12);
});
floorBtn[13].addEventListener("click", () => {
    lftFloor.toFloor(13);
});
floorBtn[14].addEventListener("click", () => {
    lftFloor.toFloor(14);
});
floorBtn[15].addEventListener("click", () => {
    lftFloor.toFloor(15);
});

let lftFloor = {
    current: 0,
    toFloor: function (floor) {
        let pos = 2810 - 200 * this.current;
        window.scrollTo(0, pos);
        let top = 3124 - 200 * floor;
        lift.style.top = `${top}px`;
        lift.style.transition = "4s";
        lift.style.transitionDelay = "1.5s";
        doors.forEach((x) => {
            x.style.left = "133px";
            x.style.transition = "2s";
        });
        doors[15 - floor].style.left = "82px";
        doors[15 - floor].style.transition = "1s";
        doors[15 - floor].style.transitionDelay = "5.5s";
        this.current = floor;
    },
};

// floorBtn[0].addEventListener("click", () => {
//     lift.style.top = "3124px";
//     lift.style.zIndex = "-2";
//     lift.style.transition = "4s";
//     lift.style.transitionDelay = "1.5s";
//     doors.forEach((x) => {
//         x.style.left = "133px";
//         x.style.transition = "2s";
//     });
//     doors[15].style.left = "82px";
//     doors[15].style.transition = "1s";
//     doors[15].style.transitionDelay = "5.5s";
// });
// floorBtn[1].addEventListener("click", () => {
//     // toFloor(1);
//     lift.style.top = "2924px";
//     lift.style.zIndex = "-2";
//     lift.style.transition = "4s";
//     // lift.style.transitionTimingFunction = "linear";
//     lift.style.transitionDelay = "1.5s";
//     doors.forEach((x) => {
//         x.style.left = "133px";
//         x.style.transition = "2s";
//     });
//     doors[14].style.left = "82px";
//     doors[14].style.transition = "1s";
//     doors[14].style.transitionDelay = "5.5s";
// });

// floorBtn[2].addEventListener("click", () => {
//     lift.style.top = "2724px";
//     lift.style.zIndex = "-2";
//     lift.style.transition = "4s";
//     // lift.style.transitionTimingFunction = "linear";
//     lift.style.transitionDelay = "1.5s";
//     doors.forEach((x) => {
//         x.style.left = "133px";
//         x.style.transition = "2s";
//     });
//     doors[13].style.left = "82px";
//     doors[13].style.transition = "1s";
//     doors[13].style.transitionDelay = "5.5s";
// });

// floorBtn[3].addEventListener("click", () => {
//     lift.style.top = "2524px";
//     lift.style.zIndex = "-2";
//     lift.style.transition = "4s";
//     // lift.style.transitionTimingFunction = "linear";
//     lift.style.transitionDelay = "1.5s";
//     doors.forEach((x) => {
//         x.style.left = "133px";
//         x.style.transition = "2s";
//     });
//     doors[12].style.left = "82px";
//     doors[12].style.transition = "1s";
//     doors[12].style.transitionDelay = "5.5s";
// });

// floorBtn[4].addEventListener("click", () => {
//     lift.style.top = "2324px";
//     lift.style.zIndex = "-2";
//     lift.style.transition = "4s";
//     // lift.style.transitionTimingFunction = "linear";
//     lift.style.transitionDelay = "1.5s";
//     doors.forEach((x) => {
//         x.style.left = "133px";
//         x.style.transition = "2s";
//     });
//     doors[11].style.left = "82px";
//     doors[11].style.transition = "1s";
//     doors[11].style.transitionDelay = "5.5s";
// });

// floorBtn[5].addEventListener("click", () => {
//     lift.style.top = "2124px";
//     lift.style.zIndex = "-2";
//     lift.style.transition = "4s";
//     // lift.style.transitionTimingFunction = "linear";
//     lift.style.transitionDelay = "1.5s";
//     doors.forEach((x) => {
//         x.style.left = "133px";
//         x.style.transition = "2s";
//     });
//     doors[10].style.left = "82px";
//     doors[10].style.transition = "1s";
//     doors[10].style.transitionDelay = "5.5s";
// });

// floorBtn[6].addEventListener("click", () => {
//     lift.style.top = "1924px";
//     lift.style.zIndex = "-2";
//     lift.style.transition = "4s";
//     // lift.style.transitionTimingFunction = "linear";
//     lift.style.transitionDelay = "1.5s";
//     doors.forEach((x) => {
//         x.style.left = "133px";
//         x.style.transition = "2s";
//     });
//     doors[9].style.left = "82px";
//     doors[9].style.transition = "1s";
//     doors[9].style.transitionDelay = "5.5s";
// });

// floorBtn[7].addEventListener("click", () => {
//     lift.style.top = "1724px";
//     lift.style.zIndex = "-2";
//     lift.style.transition = "4s";
//     // lift.style.transitionTimingFunction = "linear";
//     lift.style.transitionDelay = "1.5s";
//     doors.forEach((x) => {
//         x.style.left = "133px";
//         x.style.transition = "2s";
//     });
//     doors[8].style.left = "82px";
//     doors[8].style.transition = "1s";
//     doors[8].style.transitionDelay = "5.5s";
// });

// floorBtn[8].addEventListener("click", () => {
//     lift.style.top = "1524px";
//     lift.style.zIndex = "-2";
//     lift.style.transition = "4s";
//     // lift.style.transitionTimingFunction = "linear";
//     lift.style.transitionDelay = "1.5s";
//     doors.forEach((x) => {
//         x.style.left = "133px";
//         x.style.transition = "2s";
//     });
//     doors[7].style.left = "82px";
//     doors[7].style.transition = "1s";
//     doors[7].style.transitionDelay = "5.5s";
// });

// floorBtn[9].addEventListener("click", () => {
//     lift.style.top = "1324px";
//     lift.style.zIndex = "-2";
//     lift.style.transition = "4s";
//     // lift.style.transitionTimingFunction = "linear";
//     lift.style.transitionDelay = "1.5s";
//     doors.forEach((x) => {
//         x.style.left = "133px";
//         x.style.transition = "2s";
//     });
//     doors[6].style.left = "82px";
//     doors[6].style.transition = "1s";
//     doors[6].style.transitionDelay = "5.5s";
// });

// floorBtn[10].addEventListener("click", () => {
//     lift.style.top = "1124px";
//     lift.style.zIndex = "-2";
//     lift.style.transition = "4s";
//     // lift.style.transitionTimingFunction = "linear";
//     lift.style.transitionDelay = "1.5s";
//     doors.forEach((x) => {
//         x.style.left = "133px";
//         x.style.transition = "2s";
//     });
//     doors[5].style.left = "82px";
//     doors[5].style.transition = "1s";
//     doors[5].style.transitionDelay = "5.5s";
// });

// floorBtn[11].addEventListener("click", () => {
//     lift.style.top = "924px";
//     lift.style.zIndex = "-2";
//     lift.style.transition = "4s";
//     // lift.style.transitionTimingFunction = "linear";
//     lift.style.transitionDelay = "1.5s";
//     doors.forEach((x) => {
//         x.style.left = "133px";
//         x.style.transition = "2s";
//     });
//     doors[4].style.left = "82px";
//     doors[4].style.transition = "1s";
//     doors[4].style.transitionDelay = "5.5s";
// });

// floorBtn[12].addEventListener("click", () => {
//     lift.style.top = "724px";
//     lift.style.zIndex = "-2";
//     lift.style.transition = "4s";
//     // lift.style.transitionTimingFunction = "linear";
//     lift.style.transitionDelay = "1.5s";
//     doors.forEach((x) => {
//         x.style.left = "133px";
//         x.style.transition = "2s";
//     });
//     doors[3].style.left = "82px";
//     doors[3].style.transition = "1s";
//     doors[3].style.transitionDelay = "5.5s";
// });

// floorBtn[13].addEventListener("click", () => {
//     lift.style.top = "524px";
//     lift.style.zIndex = "-2";
//     lift.style.transition = "4s";
//     // lift.style.transitionTimingFunction = "linear";
//     lift.style.transitionDelay = "1.5s";
//     doors.forEach((x) => {
//         x.style.left = "133px";
//         x.style.transition = "2s";
//     });
//     doors[2].style.left = "82px";
//     doors[2].style.transition = "1s";
//     doors[2].style.transitionDelay = "5.5s";
// });

// floorBtn[14].addEventListener("click", () => {
//     lift.style.top = "324px";
//     lift.style.zIndex = "-2";
//     lift.style.transition = "4s";
//     // lift.style.transitionTimingFunction = "linear";
//     lift.style.transitionDelay = "1.5s";
//     doors.forEach((x) => {
//         x.style.left = "133px";
//         x.style.transition = "2s";
//     });
//     doors[1].style.left = "82px";
//     doors[1].style.transition = "1s";
//     doors[1].style.transitionDelay = "5.5s";
// });

// floorBtn[15].addEventListener("click", () => {
//     lift.style.top = "124px";
//     lift.style.zIndex = "-2";
//     lift.style.transition = "4s";
//     // lift.style.transitionTimingFunction = "linear";
//     lift.style.transitionDelay = "1.5s";
//     doors.forEach((x) => {
//         x.style.left = "133px";
//         x.style.transition = "2s";
//     });
//     doors[0].style.left = "82px";
//     doors[0].style.transition = "1s";
//     doors[0].style.transitionDelay = "5.5s";
// });
