package com.ssafy.idk.global.error;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    // COMMON
    COMMON_MEMBER_NOT_CORRECT(409, "C401", "해당 요청 사용자와 해당 정보의 사용자가 일치하지 않습니다."),

    // ITEM
    ITEM_CATEGORY_NOT_FOUND(404, "I401", "해당 상품의 카테고리가 존재하지 않습니다"),
    ITEM_NOT_FOUND(404, "I402", "해당 상품이 존재하지 않습니다"),
    ITEM_BUY_FAIL(400, "I403", "상품 결제에 실패했습니다"),

    // ACCOUNT
    ACCOUNT_NOT_FOUND(404, "A401", "계좌가 존재하지 않습니다"),
    ACCOUNT_FAIL_DELETE(400, "A402", "계좌 해지를 실패했습니다"),
    ACCOUNT_FAIL_SAVE(400, "A403", "계좌 저장을 실패했습니다"),
    ACCOUNT_PWD_NOT_SAME(400, "A404", "계좌 비밀번호와 다릅니다"),
    ACCOUNT_BALANCE_LACK(400, "A405", "계좌의 잔액이 부족합니다"),
    ACCOUNT_EXISTS(404, "A406", "계좌가 존재합니다"),
    ACCOUNT_MIN_AMOUNT_MINUS(404, "A409", "최소보유금액은 0보다 커야합니다"),

    // TRANSFER
    TRANSFER_USER_NOT_FOUND(404, "TR401", "해당 은행에 해당 계좌를 갖고 있는 유저가 없습니다"),
    TRANSFER_RECEIVER_FAIL(400, "TR402", "받는사람 계좌수단검증에 실패했습니다"),

    // MEMBER
    MEMBER_PHONE_ALREADY_VERIFIED(409, "M401", "이미 인증된 휴대폰 번호입니다."),
    MEMBER_SIGNUP_FAILED(400, "M400", "회원가입에 실패했습니다."),
    MEMBER_NOT_FOUND(404, "M402", "존재하지 않는 회원입니다."),
    MEMBER_INVALID_PIN(400, "M403", "유효하지 않은 비밀번호입니다."),
    MEMBER_SMS_SEND_FAILED(400, "M404", "문자 전송 요청에 실패했습니다."),
    MEMBER_SMS_INVALID_CODE(400, "M405", "유효하지 않는 인증 코드입니다."),
    MEMBER_TOKEN_EXPIRED(401, "M406", "토큰이 만료되었습니다."),
    MEMBER_TOKEN_INVALID(400, "M407", "유효하지 않은 토큰입니다."),
    MEMBER_UNAUTHORIZED(401, "M408", "권한이 없습니다."),
    MEMBER_HEADER_NOT_FOUND(400, "M409", "Authorization 헤더가 없습니다."),
    MEMBER_INVALID_HEADER_FORMAT(400, "M410", "Authorization 헤더는 Bearer 토큰 형식이어야 합니다."),
    MEMBER_UNKNOWN_ERROR(400, "M411", "알 수 없는 에러가 발생했습니다."),
    MEMBER_DUPLICATED(409, "M409", "이미 존재하는 회원입니다."),

    // ANALYST
    ANALYST_NOT_MATCHED_TYPE(400, "AN400", "해당 지출 유형이 없습니다."),
    ANALYST_NOT_FOUND(404, "AN404", "해당 연월 지출내역이 없습니다."),

    // RSAKEY
    RSAKEY_NOT_FOUND(404, "R404", "RSAKEY가 존재하지 않습니다."),

    // PIGGY_BANK
    PIGGY_BANK_EXISTS(409, "PB401", "이미 저금통을 가입한 계좌입니다."),
    PIGGY_BANK_INSUFFICIENT_ACCOUNT_BALANCE(409, "PB402", "계좌 잔액이 부족합니다."),
    PIGGY_BANK_NOT_FOUND(404, "PB403", "저금통이 존재하지 않습니다."),
    PIGGY_BANK_INSUFFICIENT_BALANCE(409, "PB404", "저금통 잔액이 부족합니다."),

    // TARGET_SAVING
    TARGET_SAVING_NOT_FOUND(404, "TS401", "해당 목표저축이 존재하지 않습니다."),
    TARGET_SAVING_INVALID_DATE(409, "TS402", "유효하지 않은 이체날짜입니다."),
    TARGET_SAVING_INVALID_TERM(409, "TS403", "유효하지 않은 이체기간입니다."),
    TARGET_SAVING_INCORRECT_AMOUNT(409, "TS404", "유효하지 않은 목표기간, 월납입액 및 목표금액입니다."),

    // AUTO_TRANSFER
    AUTO_TRANSFER_MY_ACCOUNT_NOT_FOUND(404, "AT401", "출금 계좌가 유효하지 않습니다."),
    AUTO_TRANSFER_INVALID_ACCOUNT(404, "AT402", "자동이체 계좌가 유효하지 않습니다."),
    AUTO_TRANSFER_AMOUNT_NEED_TO_EXCEED_ZERO(409, "AT403", "자동이체 금액은 0원 이하로 등록할 수 없습니다."),
    AUTO_TRANSFER_INVALID_TERM(409, "AT404", "자동이체 기간이 유효하지 않습니다."),
    AUTO_TRANSFER_NOT_FOUND(404, "AT405", "해당 자동이체 정보가 존재하지 않습니다."),

    // AUTO_DEBIT
    AUTO_DEBIT_NOT_FOUND(404, "AD401", "해당 자동납부가 존재하지 않습니다."),
    AUTO_DEBIT_PAYER_NUMBER_EXISTS(409, "AD403", "이미 존재하는 납부자번호입니다."),

    // POCKET
    POCKET_TARGET_SAVING_NOT_FOUND(404, "P401", "해당 목표저축이 존재하지 않습니다."),
    POCKET_AUTO_TRANSFER_NOT_FOUND(404, "P402", "해당 자동이체가 존재하지 않습니다."),
    POCKET_AUTO_DEBIT_NOT_FOUND(404, "P403", "해당 자동결제가 존재하지 않습니다."),
    POCKET_NOT_FOUND(404, "P404", "해당 돈 포켓이 존재하지 않습니다."),
    POCKET_IMPOSSIBLE_DEPOSIT(409, "P405", "해당 돈 포켓에 돈을 입금할 수 없습니다."),
    POCKET_IMPOSSIBLE_WITHDRAWAL(409, "P406", "해당 돈 포켓의 돈을 출금할 수 없습니다."),
    POCKET_TRANSACTION_NOT_FOUND(404, "P407", "해당 돈 포켓 입출금 내역이 존재하지 않습니다."),
    POCKET_AUTO_TRANSFER_EXISTS(409, "P408", "해당 자동이체의 돈 포켓이 존재합니다."),
    POCKET_AUTO_DEBIT_EXISTS(409, "AD402", "해당 자동결제의 돈 포켓이 존재합니다."),

    // PAYMENT
    PAYMENT_VERIFY_FAIL(400, "P401", "결제수단 검증에 실패했습니다"),
    PAYMENT_INFORMATION_NOT_FOUND(404, "P402", "결제 요청 정보를 찾을 수 없습니다"),
    PAYMENT_BALANCE_FAIL(400, "P403", "결제가능금액이 부족합니다"),

    // MYDATA
    MYDATA_FAILED(400, "MD400", "마이데이터 요청을 실패했습니다."),
    MYDATA_SIGN_TRANSFORM_FAILED(400, "MD400", "전자서명 변환에 실패했습니다."),
    MYDATA_ORG_NOT_FOUND(404, "MD404", "기관을 찾을 수 없습니다."),
    MYDATA_ASSET_NOT_FOUND(404, "MD404", "마이데이터 자산 정보를 찾을 수 없습니다."),
    MYDATA_NOT_FOUND(404, "MD405", "해당 마이데이터 정보를 찾을 수 없습니다."),

    // CLIENT
    CLIENT_BANK_SIGNUP_FAILED(400, "CB400", "타은행 회원 생성에 실패했습니다."),
    CLIENT_AUTO_TRANSFER_INFO_FAILED(400, "CB400", "자동이체 정보 조회에 실패했습니다."),
    CLIENT_CARDS_INFO_FAILED(400, "CB400", "카드 정보 조회에 실패했습니다."),

    // SALARY
    SALARY_NOT_FOUND(404, "SLR401", "해당 월급이 존재하지 않습니다."),

    // ORGANIZATION
    ORGANIZATION_INVALID(409, "ORG-401", "유효하지 않은 기관입니다.");


    private final int status;
    private final String code;
    private final String message;
    }
