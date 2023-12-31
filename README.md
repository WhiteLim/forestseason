# NextForest Project
<img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white" /> <img src="https://img.shields.io/badge/Nextjs-000000?style=flat&logo=Next.js&logoColor=white" /> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" /> <img src="https://img.shields.io/badge/JAVASCRIPT-007396?style=flat&logo=Javascript&logoColor=white" /> <img src="https://img.shields.io/badge/Oracle Cloud-F80000?style=flat&logo=Oracle&logoColor=white" />  <img src="https://img.shields.io/badge/Maria DB-003545?style=flat&logo=MariaDB&logoColor=white" />

# Project Goals
```
1. javascript / nextjs의 최대 활용을 위한 코딩
2. Maria DB CRUD의 단순화
3. 개발자 한은일에 대한 직관적인 설명
4. Commit에 대한 다양한 사용법 숙지
```

# Project structure
```
$ tree
├─public
└─app
    ├─components      Style 컴포넌트 선언
    ├─page            페이지 마크업
    ├─router          DBsetting
    └─call            Page 컴포넌트
```


# commit 
```
feat        새로운 기능을 제공합니다.
fix         버그 수정.
docs        문서만 변경됩니다.
style       코드 작동에 영향을 미치지 않는 스타일 변경(빈 공간, 코드 포멧팅, 누락된 세미콜론 등)
test        테스트 코드를 추가하거나 기존 테스트 코드를 수정합니다.
```

# Troubleshooting 
```
1. Style.js 컴포넌트 분리 작업 (실시간 적용 오류 문제 발생) 
   └─ Pr. 각 페이지별 모드 별 랜더링 안되는 현상 / Solve. 각 페이지별 모드 변경시 useState로 값 변경으로 치환
2. Light/ Dark 모드 값 유지 이슈
   └─ localStorage 사용으로 초기값을 light로 지정 이후 모드 변경시 localStorage에 모드 값 저장 후 컬러값 전체 변경
3. Config 파일 컴포넌트형식으로 data 처리 오류
   └─ Mode.js 자체에서 axios로 데이터 호출 및 admin 페이지에서 setCf로 data 최신화 설정 변경
4. 이미지 Base64 변환 시 서버 500 err로 인해 DB 저장 불가 현상
   └─ 오라클 자체 접근 차단으로 확인, 능력의 한계로 인해 썸네일 형식으로 저용량으로 진행
5. CKeditor5 문제 발생
   └─ Next 미지원으로 인해 Webpack 문제 발견
   └─ react-markdown-editor로 변경하여 작업 진행
6. DB 저장시 '' / "" 문제 발생
   └─ DB 저장 시 변수 선언에 String으로 강제로 변경 저장
```

 기획 : [노션](https://www.notion.so/wh-pf/White-lim-Portfolio-32cc6df132924daa9fc6a84d2c324394?pvs=4)
 디자인 : [피그마](https://www.figma.com/file/oRD3RO6wSxDyf6KeLGedNT/White-Forest?type=design&node-id=0%3A1&mode=design&t=zUQrERcn7wXtvjO8-1)
