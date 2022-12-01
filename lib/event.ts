enum EventType {
  USER_UPDATE = "user-update",
  USER_LOGINSTATE_CHANGE = "user-login-state-change",
}

class CustomEvent {
  public fire(etag: EventType, shout: any, target?: Element) {
    if (typeof window === "object") {
      console.warn(" 클라이언트 사이드에서 호출해야 합니다.");
      return;
    }
  }
}

export default CustomEvent;
