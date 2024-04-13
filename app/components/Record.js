"use client";

import React, { useEffect } from "react";
import gsap, { Linear, Power1 } from "gsap";
import Draggable from "gsap/dist/Draggable";
gsap.registerPlugin(Draggable);

const Record = () => {
  useEffect(() => {
    const circle = document.querySelector(".main-circle");

    const spin = gsap.timeline({ repeat: -1 });

    // 원을 시계 방향으로 회전시키고 각 이미지를 반시계 방향으로 회전시킵니다.
    spin.to(circle, {
      rotation: 360,
      duration: 60,
      ease: Linear.easeNone,
    });

    // 드래그 가능한 원을 만듭니다.
    const draggable = Draggable.create(".main-circle", {
      type: "rotation",
      throwProps: true,
      onPressInit: function () {
        spin.pause();
      },
      onDrag: function () {
        // 드래그 중에는 `spin` 타임라인의 진행 상황을 조정합니다.
        const angle = (this.rotation + 360 * 100000) % 360;
        spin.progress(angle / 360);
        // 드래그 중에 `spin` 타임라인을 다시 시작합니다.
        spin.resume();
      },
      onThrowUpdate: function () {
        const angle = (this.rotation + 360 * 100000) % 360;
        spin.progress(angle / 360);
      },
      onThrowComplete: function () {
        // 드래그 완료 후 `spin` 타임라인을 다시 재개합니다.
        spin.resume();
        gsap.fromTo(
          spin,
          { timeScale: 0 },
          { timeScale: 1, duration: 1, ease: Power1.easeIn }
        );
      },
    })[0]; // Draggable.create는 배열을 반환하므로 첫 번째 요소를 참조합니다.
    // 이미지를 클릭할 때 스핀을 다시 시작하는 이벤트 핸들러
    const handleImageClick = () => {
      // 스핀 타임라인을 다시 재개합니다.
      spin.resume();
    };
    // `circle` 요소에 클릭 이벤트 핸들러 추가
    if (circle) {
      circle.addEventListener("click", handleImageClick);
    }
    // 컴포넌트가 언마운트될 때 이벤트 핸들러 제거
    return () => {
      if (circle) {
        circle.removeEventListener("click", handleImageClick);
      }
    };
  }, []);

  return (
    <div className="viewport-box p-28">
      <div
        className="main-circle"
        style={{
          width: "400px",
          height: "400px",
          background: "#f4f4f4",
          position: "relative",
          borderRadius: "50%",
          margin: "0 auto",
        }}
      >
        <img src="/record.png" alt="" />
      </div>
    </div>
  );
};

export default Record;
