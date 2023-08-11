### 프리온보딩 프론트엔드 인턴십

### 이름

- 김준섭

### 프로젝트 실행방법

```shell
git clone https://github.com/junsobi/wanted-pre-onboarding-frontend.git
cd wanted-pre-onboarding-frontend
npm install
npm start
```

### 데모 영상

Vercel을 통해 배포.
[배포 링크](https://wanted-pre-onboarding-frontend-t5f1.vercel.app/)

### 사용 라이브러리

- React Router
- Axios
- TailWind CSS

### 파일 구조

별표(\*)는 주요 파일입니다.

```bash
📦src
 ┣ 📂components
 ┃ ┣ 📜Button.tsx
 ┃ ┣ 📜CheckBox.tsx
 ┃ ┣ 📜ErrorMessage.tsx
 ┃ ┣ 📜GradientDot.tsx
 ┃ ┣ 📜Input.tsx
 ┃ ┣ 📜LoadingSpinner.tsx
 ┃ ┗ 📜TokenChecker.tsx*
 ┣ 📂constants
 ┃ ┗ 📜routes.ts
 ┣ 📂context
 ┃ ┣ 📂hook
 ┃ ┃ ┗ 📜useTodo.ts
 ┃ ┗ 📜TodoContext.tsx*
 ┣ 📂hooks
 ┃ ┗ 📜useAuthFormValidation.ts*
 ┣ 📂layout
 ┃ ┗ 📂MainLayout
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜HomeIconButton.tsx
 ┃ ┃ ┃ ┣ 📜UserIconButton.tsx
 ┃ ┃ ┃ ┗ 📜UserMenu.tsx
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┗ 📜useUserMenu.ts
 ┃ ┃ ┗ 📜MainLayout.tsx*
 ┣ 📂pages
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜Authenticated.tsx
 ┃ ┃ ┃ ┣ 📜MainPageLayout.tsx
 ┃ ┃ ┃ ┗ 📜NotAuthenticated.tsx
 ┃ ┃ ┗ 📜Main.tsx*
 ┃ ┣ 📂SignIn
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜SignInForm.tsx
 ┃ ┃ ┃ ┣ 📜SignInLayout.tsx
 ┃ ┃ ┃ ┗ 📜SignUpLink.tsx
 ┃ ┃ ┗ 📜SignIn.tsx*
 ┃ ┣ 📂SignUp
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜SignInLink.tsx
 ┃ ┃ ┃ ┣ 📜SignUpForm.tsx
 ┃ ┃ ┃ ┣ 📜SignUpLayout.tsx
 ┃ ┃ ┃ ┣ 📜registerUser.ts
 ┃ ┃ ┃ ┗ 📜validation.ts
 ┃ ┃ ┗ 📜SignUp.tsx*
 ┃ ┗ 📂ToDo
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜DisplayTodoItem.tsx
 ┃ ┃ ┃ ┣ 📜EditingTodoItem.tsx
 ┃ ┃ ┃ ┣ 📜ToDoForm.tsx
 ┃ ┃ ┃ ┣ 📜ToDoItem.tsx
 ┃ ┃ ┃ ┣ 📜ToDoItems.tsx
 ┃ ┃ ┃ ┗ 📜ToDoLayout.tsx
 ┃ ┃ ┗ 📜ToDoPage.tsx*
 ┣ 📂services
 ┃ ┣ 📜apiClient.ts*
 ┃ ┣ 📜authAPI.ts
 ┃ ┗ 📜todoAPI.ts
 ┣ 📂types
 ┃ ┗ 📜types.ts
 ┣ 📜Router.js
 ┣ 📜index.css
 ┣ 📜index.tsx*
 ┗ 📜react-app-env.d.ts
```

### 주요 파일과 구현 설명

## 📂 index.tsx

- index.tsx는 프로젝트의 진입점(entry point)입니다.

- **React & ReactDOM**: React 라이브러리와 DOM을 조작하기 위한 ReactDOM 라이브러리를 가져옵니다.
- **index.css**: Tailwind CSS와 함께 프로젝트의 전역 스타일을 정의합니다.
- **Router**: 앱의 주요 라우팅 로직이 포함된 컴포넌트입니다.
- **ReactDOM.render**를 통해 전체 앱이 root DOM 요소에 렌더링됩니다.

---

## 📂 context/TodoContext.tsx

**`TodoProvider`** 컴포넌트는 애플리케이션 전체에서 할 일 데이터를 관리하고 해당 데이터와 관련된 기능들을 자식 컴포넌트에 제공하는 Context Provider입니다.

### 🌟 주요 특징:

1. **할 일 데이터 관리**:

   - 이 컴포넌트는 애플리케이션에서 사용되는 모든 할 일(`todos`)을 상태로 관리합니다.

2. **할 일에 대한 CRUD 연산**:

   - `createTodo`, `updateTodo`, `deleteTodo`, 그리고 `getTodos` 함수들을 통해 할 일에 대한 생성, 읽기, 수정, 삭제 연산을 처리합니다.

3. **초기 데이터 로딩**:
   - 컴포넌트가 마운트 될 때 `getTodos` 함수를 이용해 초기 할 일 데이터를 가져옵니다.

---

## 📂 components/TokenChecker.tsx

**TokenChecker**는 앱의 모든 페이지를 방문할 때마다 사용자의 토큰 상태를 검증하는 컴포넌트입니다.

### 🌟 주요 특징:

1. **`checkToken` 함수**: 로컬 스토리지에 저장된 JWT 토큰의 유효성과 만료 상태를 검사합니다.
2. **`useEffect`**:
   - **인증 상태**: 토큰의 유무를 기반으로 사용자의 인증 상태를 판단합니다.
   - **토큰 만료**: 토큰이 유효하지만 만료된 경우 토큰을 삭제하고 사용자를 로그인 페이지로 리다이렉트합니다.
   - **인증된 사용자 리다이렉트**: 인증된 사용자가 로그인 또는 회원가입 페이지에 방문하면 투두 페이지로 리다이렉트합니다.
   - **미인증 사용자 리다이렉트**: 인증되지 않은 사용자가 투두 페이지에 접근하면 로그인 페이지로 리다이렉트합니다.

**TokenChecker**는 라우터의 모든 경로를 감싸서 각 페이지에 액세스하기 전에 토큰 상태를 검증하여 적절한 리다이렉션을 보장합니다.

---

## 📂 hooks/useAuthFormValidation.ts

**`useAuthFormValidation`**은 이메일과 비밀번호의 유효성을 검사하는 React custom hook입니다.

### 🌟 주요 특징:

1. **상태 관리**: 이메일, 비밀번호, 에러 메시지 및 버튼 활성화 상태를 관리합니다.
2. **`useEffect`**: 이메일과 비밀번호가 변경될 때마다 유효성 검사를 수행합니다.
3. **에러 메시지 설정**: `validateInput` 함수를 통해 얻은 에러 메시지를 `errorMessage` 상태에 저장합니다.
4. **버튼 활성화**: 에러 메시지가 있으면 버튼을 비활성화하고, 없으면 활성화합니다.

---

## 📂 layout/MainLayout/MainLayout.tsx

**`MainLayout`**은 주요 레이아웃 컴포넌트로, 페이지의 구조와 고정된 아이콘 버튼을 제공합니다.

### 🌟 주요 특징:

1. **상태 관리**: `isOpen` 상태를 통해 사용자 메뉴 모달의 표시 여부를 관리합니다.
2. **홈 아이콘 버튼**: **`HomeIconButton`** 컴포넌트를 통해 홈 페이지로의 이동 기능을 제공합니다.
3. **사용자 아이콘 버튼**: **`UserIconButton`** 컴포넌트를 사용하여 사용자 메뉴 모달을 표시/숨기는 기능을 제공합니다.
4. **사용자 메뉴 모달**: **`UserMenu`** 컴포넌트를 통해 로그인 및 회원가입 또는 로그아웃 기능을 제공합니다. 로그인 상태 여부에 따라 다른 메뉴를 표시합니다.

---

## 📂 pages/Main/Main.tsx

**`Main`** 컴포넌트는 사용자의 로그인 상태에 따라 다른 화면을 보여주는 메인 페이지 컴포넌트입니다.

### 🌟 주요 특징:

1. **상태 관리**: 할 일(`todos`)을 관리하는 상태와 로컬 스토리지에 저장된 `jwt` 토큰을 사용하여 사용자의 로그인 상태를 확인합니다.

2. **로그인 상태에 따른 렌더링**:
   - 로그인하지 않은 사용자에게는 로그인 및 회원가입 버튼을 제공합니다.
   - 로그인한 사용자에게는 할 일 목록으로 이동하는 버튼과 해야 할 일의 개수를 표시합니다.

---

## 📂 pages/SignIn/SignIn.tsx

**`SignIn`** 컴포넌트는 사용자가 로그인할 수 있는 페이지 컴포넌트입니다.

### 🌟 주요 특징:

1. **Input 관리**: 컴포넌트에서 사용자의 이메일 및 비밀번호 입력을 관리합니다.

2. **로그인 처리**: 사용자의 입력 정보를 바탕으로 `signIn` 함수를 통해 API 로그인 요청을 보냅니다.

3. **Input 유효성 검사**: `validateInput` 함수를 통해 입력된 이메일 및 비밀번호의 유효성을 검사합니다.

4. **에러 메시지 표시**: 로그인 요청 중 발생한 에러는 사용자에게 알려줍니다.

---

## 📂 pages/SignUp/SignUp.tsx

**`SignUp`** 컴포넌트는 사용자가 회원가입할 수 있는 페이지 컴포넌트입니다.

### 🌟 주요 특징:

1. **Input 관리**: 컴포넌트는 사용자의 이메일 및 비밀번호 입력을 관리합니다.

2. **회원가입 처리**: 사용자의 입력 정보를 바탕으로 `registerUser` 함수를 통해 회원가입 요청을 보냅니다.

3. **Input 유효성 검사**: `validateInput` 함수를 통해 입력된 이메일 및 비밀번호의 유효성을 검사합니다.

4. **에러 메시지 표시**: 회원가입 요청 중 발생한 에러나 입력 유효성 검사에서 나온 에러는 사용자에게 알려줍니다.

---

## 📂 pages/ToDo/ToDoPage.tsx

**`TodoPage`** 컴포넌트는 사용자의 할 일 목록을 관리하는 주요 페이지입니다.

### 🌟 주요 특징:

**할 일 항목의 조작**: 각 할 일 항목의 완료 상태를 토글하거나, 항목을 삭제, 또는 편집할 수 있습니다.

---

## 📂 services/apiClient.ts

**`apiClient`** 모듈은 프론트엔드 애플리케이션과 백엔드 API 간의 통신을 책임지는 HTTP 클라이언트 기능을 제공합니다.

### 🌟 주요 특징:

1. **Axios 활용**: Axios 라이브러리를 사용하여 HTTP 요청을 구성 및 실행합니다.
2. **기본 설정**: 공통 URL 및 헤더 설정을 포함하여 Axios 인스턴스를 생성합니다.
