// 플러그인 생성 규칙
// 플러그인은 함수 형태로 작성
// 플러그인 함수는 객체를 반환
// 반환된 객체는 name, vite hook 속성을 가짐
// name: 플러그인 이름
// vite에서 지원하는 별도의 훅: transform, buildStart, buildEnd, etc.
// apply: 플러그인이 적용될 시점과 동작을 정의하는 함수
import sharp from "sharp";
import fs from "fs";

export default function watermarkPlugin(options) {
  const options = {
    text: "weniv",
    position: "center",
    color: "#fff",
    fontSize: 50,
  };

  return {
    name: "vite-plugin-img-watermark", // 플러그인 이름
    // 핵심 로직이 들어가는 부분

    // transform: 파일들에 접근할 수 있는 훅
    // src: 파일의 소스코드
    // id: 파일의 경로
    async transfrom(src, id) {
      console.log("파일 경로 ", id);
      console.log("파일 소스 ", src);

      // 이미지 파일에서만 작동하도록 필터링
      if (!/\.png|jpg|jpeg|gif|svg$/.test(id)) {
        // 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 true 또는 false로 반환
        return;
      }

      try {
        // 파일을 동기적으로 읽어옴 및 버퍼 형태로 반환
        // 버퍼란 메모리 공간에 저장된 바이너리 데이터의 집합
        const imageBuffer = fs.module.readFileSync(id);

        // 샤프 이미지 객체를 만들어준다.
        const image = sharp(imageBuffer);

        // 이미지 메타데이터
        const metadata = await image.metadata();

        // 샤프 워터마크 이미지 생성
        const svgText = `
          <svg width="${metadata.width}" height="${metadata.height}">
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
                  font-size="${options.fontSize}" fill="${options.color}" font-family="sans-serif">
              ${options.text}
            </text>
          </svg>
        `;
        // 원본 이미지와 svg를 합성한 이미지 버퍼를 생성합니다.
        const processedImageBuffer = await image
          .composite([
            {
              input: Buffer.from(svgText),
            },
          ])
          .toBuffer();

        // 최종적으로 만들어진 이미지를 반환
        const base64Image = `data:image/${
          metadata.format
        };base64,${processedImageBuffer.toString("base64")}`;

        return `export default "${base64Image}"`;
      } catch (error) {
        console.error(error.message);
      }
    },
  };
}
