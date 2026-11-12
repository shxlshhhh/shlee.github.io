# Biomedical Research Portfolio / 바이오 연구자 포트폴리오

HTML, CSS, vanilla JavaScript로 제작된 한국어/영어 반응형 GitHub Pages 사이트입니다. 별도 빌드 단계가 없습니다.

## 로컬 실행

`index.html` 파일을 브라우저에서 열어도 됩니다. 더 안정적인 테스트를 위해 프로젝트 폴더에서 아래 명령을 실행하세요.

```bash
python -m http.server 8000
```

브라우저에서 `http://localhost:8000`으로 접속합니다.

## 게시 전 반드시 수정할 항목

1. `index.html`: `<title>`, 상단 브랜드 `SH.LEE`, footer의 `SH Lee`를 본인 공개용 이름으로 변경합니다.
2. `script.js`: 맨 위 `PROFILE`의 `email`, `github`, `linkedin`에 공개 가능한 연락처를 입력합니다. 비워두면 실제 링크가 비활성화됩니다.
3. `index.html` 및 `script.js`의 프로젝트 소개 문구를 검토하고 실제 수행 범위에 맞게 조정합니다. 한/영 번역 모두 수정하세요.
4. 공개된 논문·특허 정보가 확인된 경우에만 Outputs 섹션에 정확한 서지정보와 DOI/공개번호를 추가합니다.
5. 회사의 비공개 데이터, 내부 코드명, 출원 전 특허정보, 공개되지 않은 효능 수치, 원자료는 업로드하지 마세요.

## GitHub Pages 배포 (웹 UI)

1. GitHub 로그인 후 **New repository**를 클릭합니다.
2. 사용자 사이트 주소 `https://USERNAME.github.io/`를 원하면 저장소 이름을 `USERNAME.github.io`로 설정합니다. 일반 저장소 이름(예: `research-portfolio`)도 가능합니다.
3. **Public** 저장소를 만들고 이 폴더의 파일/하위 폴더를 루트에 업로드합니다. `index.html`, `styles.css`, `script.js`, `assets/favicon.svg`, `.nojekyll`을 포함하세요.
4. **Settings → Pages → Build and deployment → Source: Deploy from a branch**를 선택합니다.
5. Branch는 `main`, Folder는 `/(root)`로 설정하고 **Save**합니다.
6. 배포 완료 후 Pages에 표시되는 주소로 접속합니다. 사용자 저장소는 `https://USERNAME.github.io/`, 프로젝트 저장소는 `https://USERNAME.github.io/REPOSITORY/` 형태입니다.
7. 변경 사항은 파일을 수정해 `main` 브랜치에 커밋하면 다시 배포됩니다.

## Git CLI로 업로드 (선택)

```bash
git init
git add .
git commit -m "Initial researcher portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

원격 GitHub 저장소를 먼저 생성하고 `USERNAME`/`REPOSITORY`를 실제 값으로 바꾸세요.

## 파일 구성

- `index.html`: 섹션 구성과 콘텐츠
- `styles.css`: 반응형 디자인
- `script.js`: 한/영 전환, 모바일 메뉴, 스크롤 애니메이션, 연락처 설정
- `assets/favicon.svg`: 사이트 아이콘
- `.nojekyll`: 정적 파일 직접 배포

## 유의사항

- 외부 Google Fonts를 사용합니다. 오프라인에서는 시스템 글꼴로 대체됩니다.
- 방문자 브라우저의 `localStorage`에 선택한 언어만 저장합니다.
- 연락처 입력 폼이나 방문자 추적 기능은 포함하지 않았습니다.
- 이 템플릿은 공개 전 본인 확인 및 회사의 대외 공개 정책 검토가 필요합니다.
