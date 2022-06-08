const descriptions = {
  start: {
    first: [
      {
        text: "이 실험은 회원가입 UI에 따른 회원가입 과정의 사용성을 측정하는 실험입니다.",
        isStrong: false,
      },
      {
        text: "가상의 회원가입 상황이 두 번 제시되며, 설문지 응답을 끝으로 실험이 종료됩니다.",
        isStrong: false,
      },
      {
        text: "가급적 고정된 장소에서 실험을 진행해주시고 실험이 끝날 때까지 온라인 상태를 유지해주십시오.",
        isStrong: false,
      },
      {
        text: "또한 실험 도중에 브라우저의 뒤로가기나 새로고침 버튼을 누르지 않도록 유의하여 주십시오.",
        isStrong: false,
      },
    ],
    second: [
      {
        text: "회원가입시 실제 개인정보가 아닌 가상의 정보가 사용됩니다.",
        isStrong: false,
      },
      {
        text: "전체 실험에는 약 5분 정도가 소요될 예정입니다.",
        isStrong: false,
      },
      {
        text: "실험 참가에 동의하시면 '다음' 버튼을 눌러주세요.",
        isStrong: false,
      },
    ],
  },
  personal: [
    {
      text: "실험 데이터 구분을 위해 개인정보를 수집합니다. 입력하신 개인정보는 연구 종료와 함께 폐기됩니다.",
      isStrong: false,
    },
    {
      text: "생년 정보와 전화번호 뒷자리를 입력해주세요.",
      isStrong: false,
    },
  ],
  typingTest: [
    {
      text: "회원가입 과정에서 아래와 같은 입력칸과 글자가 나타날 것입니다.",
      isStrong: false,
    },
    {
      text: "본 실험에 들어가기 전에 연습 시행을 하겠습니다.",
      isStrong: false,
    },
    {
      text: "입력칸 바로 밑에 있는 글자를 그대로 입력해주십시오.",
      isStrong: false,
    },
  ],
  condition1: [
    { text: "이제 가상의 회원가입이 진행됩니다.", isStrong: false },
    {
      text: "실제 개인정보가 아닌 입력칸 바로 밑에 제시되는 정보를 그대로 입력해주세요.",
      isStrong: true,
    },
    { text: "준비가 되면 '다음' 버튼을 눌러주세요.", isStrong: false },
  ],
  error: {
    personalInputError: {
      birth: {
        text: "생년 정보를 다시 확인해주세요.",
        isStrong: true,
      },
      phone: {
        text: "번호를 다시 확인해주세요.",
        isStrong: true,
      },
    },
    dataLoadingError: [
      { text: "데이터 로딩에 실패하였습니다.", isStrong: false },
      {
        text: "죄송합니다. 실험자에게 오류 발생 사실을 전달하여 주십시오.",
        isStrong: false,
      },
    ],
    offlineError: [
      { text: "인터넷 연결이 끊어졌습니다.", isStrong: false },
      {
        text: "연결 상태를 확인해주시고 링크에 재접속하여 실험을 다시 시작해주시기 바랍니다.",
        isStrong: false,
      },
      {
        text: "만약 인터넷에 연결되어 있음에도 이 오류가 표시된다면 실험자에게 오류 발생 사실을 전달하여 주십시오.",
        isStrong: false,
      },
    ],
    wideScreenError: [
      { text: "스마트폰 세로 화면이 아닌 것 같습니다.", isStrong: false },
      {
        text: "이 실험은 스마트폰 세로 화면에서만 참여할 수 있습니다.",
        isStrong: false,
      },
      {
        text: "화면을 세로로 전환하고 새로고침하거나 스마트폰으로 재접속하여 참가하여 주십시오.",
        isStrong: false,
      },
      {
        text: "만약 스마트폰 세로 화면임에도 이 오류가 발생했다면 실험자에게 오류 발생 사실을 전달하여 주십시오.",
        isStrong: false,
      },
    ],
  },
  loading: [{ text: "데이터 받아오는 중...", isStrong: false }],
};

export default descriptions;
