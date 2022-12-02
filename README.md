# JinyDev

<div align="center">
<br/>
  <img src="https://img.shields.io/badge/version-1.0.0-4B32C3"/>
  <img src="https://img.shields.io/badge/yarn-1.22.19-2C8EBB?logo=yarn"/>
  <br/>
</div>

<h2 align="center">

<img src="https://user-images.githubusercontent.com/87177577/205266304-77919ae6-a19d-406b-be4d-4178e2723fde.png" width="200"/>

    개발과 관련된 자료를 모아두는 나만의 Blog

</h2>

## 🏠 서비스 주소

> [JinyDev](https://jinydev.site)

## 💁 프로젝트 소개

> JinyDev는 `프론트엔드 개발자`로써의 `저의 모습들을 기록`하며 `필요한 자료들을 정리`하는 `개발 블로그`입니다.

## 🛠 기술 스택

<div align="center">
<br/>
  <img src="https://img.shields.io/badge/React-18.2.0-61dafb?logo=React"/>
  <img src="https://img.shields.io/badge/Next.js-13.0.2-000000?logo=Next.js"/>
  <img src="https://img.shields.io/badge/Typescript-4.8.4-3178c6?logo=typescript"/>
  <img src="https://img.shields.io/badge/Recoil-0.7.6-0094F5?logo=recoil"/>
  <img src="https://img.shields.io/badge/Recoil persist-4.2.0-0094F5"/>
  <img src="https://img.shields.io/badge/Styled components-5.3.6-DB7093?logo=styled-components"/>
  <img src="https://img.shields.io/badge/Next mdx remote-4.2.0-F7B93E"/>
  <img src="https://img.shields.io/badge/Storybook-6.5.13-FF4785?logo=storybook"/>
  <img src="https://img.shields.io/badge/Husky-8.0.1-41454A?logo=husky"/>
  <img src="https://img.shields.io/badge/Prettier-2.7.1-F7B93E?logo=Prettier"/>
  <img src="https://img.shields.io/badge/Eslint-8.2.6-4B32C3?logo=Eslint"/>
  <br/>
</div>

## 🚀 배포

<div align="center">
<br/>
  <img src="https://img.shields.io/badge/AWS S3-569A31?logo=Amazon S3"/>
  <img src="https://img.shields.io/badge/AWS CloudFront-232F3E?logo=aws cloudfront"/>
  <img src="https://img.shields.io/badge/Github Actions-2088FF?logo=github actions"/>
  <br/>
</div>

### CI/CD Architecture

---

<div align="center">
 <img width="600" alt="image" src="https://user-images.githubusercontent.com/87177577/205329774-ca0f2dce-696e-4424-b8b1-463fda1221e2.png">
</div>

---

- `AWS S3, AWS CloudFront, Github Actions`를 통해 `CI(지속적 통합)/CD(지속적 배포)를 진행`하였습니다.
- main branch에 `pull_request` githook이 발생하면 `ci/cd.yml이 실행`되어 `AWS에 배포`되는 방식입니다.

## 🗂 폴더 구조

```
├── .github
├── .husky
├── .next
├── .storybook
├── atoms : recoil 전역 상태
├── components : 컴포넌트
├── constants : 전역 상수
├── hooks : custom hook
├── interfaces : 페이지, 템플릿, 컴포넌트 interface
├── pages : 페이지 컴포넌트
├── pageStories : 페이지 관련 스토리(storybook)
├── posts : 블로그 포스팅 자료
├── public : sitemap, robots, image
├── styles : css 관련
├── templates : 페이지에 포함 시킬 template 컴포넌트
├── utils : 유틸 함수들
├── README.md
├── .babelrc
├── eslint.json
├── .gitignore
├── .lintstagedrc.js
├── .prettierrc.json
├── next-env.d.ts
├── next-config.js
├── README.md
├── package.json
├── tsconfig.json
└── yarn.lock
```

## 💻 Install

**Execute**

```bash
# 0. clone
> git clone https://github.com/jinyoung234/JinyDev.git
# 1. 의존성 설치
> yarn install & yarn
# 2. 실행하기
> yarn dev
# 3. StoryBook 확인
> yarn storybook
```

## 📖 DOCS

> [JinyDev Docs](https://shelled-operation-d0b.notion.site/JinyDev-cafdf1525fc142ad8c4ae8b0afd27806)

- `블로그 제작시 필요한 사항`들을 `Notion`을 이용하여 `정리`하였습니다.
- `블로그 제작 목적, 제작을 위한 issue 생성, CheckList, 컨벤션, 참고 문서, 디자인, 컴포넌트 트리, 회고` 등이 포함 되어있습니다.

## 🎨 Design

> [Figma](https://www.figma.com/file/LSXbbdhGOsKIUbtUJp7Toj/JinyDev)

- `블로그 제작`을 위해 `피그마`를 이용하여 `디자인을 진행`하였습니다.

## 🌳 Component Tree

---

<div align="center">
 <img width="800" alt="image" src="https://user-images.githubusercontent.com/87177577/205337024-a7fa2813-16cf-4017-be9f-33884f3e04ee.png">
</div>

---

## 🆂 StoryBook

> [Storybook](https://63897667321e32d242df7989-cbwxmrltrb.chromatic.com)

- `독립적 UI 컴포넌트 개발` 및 `컴포넌트 문서화`를 통해 `CDD`(Component Driven Development)를 실천하였고, 이를 위해 `StoryBook을 사용`하였습니다.

## 💁‍♀️ About Blog

### 0. Common

---

<video width="330" src="https://user-images.githubusercontent.com/87177577/205320783-5870e2db-ddea-4495-afd4-b441c60b2550.MOV" controls autoplay></video>

---

- `2가지 Theme`(light mode, color mode)를 통해 블로그를 확인할 수 있습니다.

### 1. Main Page

---

<div align="center">
  <img width="800" alt="image" src="https://user-images.githubusercontent.com/87177577/205275431-e06364b9-490e-41c9-8ee9-4b4a5c40fba2.png">
</div>

---

- Main Page에선 `개발자로써의 제 자신을 표현` 하였습니다.
- `도전하는 개발자`로써의 `저의 모습`에 대해 3가지의 `해시 태그`로 정리하였습니다.

### 2. Dev Page

---

<video width="330" src="https://user-images.githubusercontent.com/87177577/205320752-ea0c5c85-ee0d-41da-9f81-9702d75b8ddd.MOV" controls autoplay></video>

---

- 블로그의 `전체 게시물을 확인`할 수 있습니다.
- `카테고리 태그, 게시물, 카테고리`로 페이지를 구성하였습니다.
- 블로그 포스팅은 `Next의 SSG`를 이용하여 mdx 파일을 작성 후 `build 시 포스팅한 것들이 업로드` 되도록 구성하였습니다.

---

<div align="center">
  <img width="800" alt="image" src="https://user-images.githubusercontent.com/87177577/205279786-82878a68-8b47-4e20-bc94-78d2b7cbc3d2.png">
</div>

---

- 블로그 게시물은 `이미지, 제목, 설명, 작성 일자, 태그` 들로 구성하였습니다.

---

<video width="330" src="https://user-images.githubusercontent.com/87177577/205320728-62ad9266-f2b2-475a-a51b-a4aba287fdca.MOV" controls autoplay></video>

---

- 카테고리 태그를 통해 `블로그의 태그들을 클릭` 할 시 `태그와 관련된 게시물을 확인`할 수 있습니다.

---

<video width="330" src="https://user-images.githubusercontent.com/87177577/205320708-290afbd0-b527-4580-abd7-10d8a66ae074.MOV" controls autoplay></video>

---

- 블로그 카테고리는 총 `9개의 카테고리`로 구성하였으며, `All`을 클릭하면 `전체 게시물을 확인`할 수 있습니다.
- `그 외의 카테고리를 클릭`할 경우 `해당 카테고리에 대한 게시물을 확인`할 수 있습니다.

---

### 3.Post(Slug) Page

---

<div align="center">
  <img align="top" width="500" alt="image" src="https://user-images.githubusercontent.com/87177577/205281192-158e2c13-2299-47e0-9550-0891393b4390.png"/>
  <img algin="top" width="500" alt="image" src="https://user-images.githubusercontent.com/87177577/205310077-767069f0-211b-4534-a3c6-c181532691cb.png"/>
</div>

---

- Post Page는 게시물을 클릭했을 때 확인할 수 있는 `게시물의 상세 페이지` 입니다.
- 게시물에 대한 `카테고리, 제목, 날짜, 태그` 등의 정보가 나타나며`(사진 1)`, `게시물에 대한 포스팅 내용을 확인`할 수 있습니다.`(사진 2)`

---

<video width="330" src="https://user-images.githubusercontent.com/87177577/205319481-9ddf2708-8e6f-4225-8a48-0055b48d966a.MOV" controls autoplay></video>

---

- `목차들의 정보`를 `Toc`에 나타내었으며 `스크롤`을 할 경우 `현재 위치에 해당되는 목차`를 확인할 수 있습니다.
