import styled, { css } from "styled-components";

export const Button = styled.div`
    width: 300px;
    margin: 0 auto;
    text-align: center;

    button {
        all: unset;
        padding: 6px;
        margin: 6px 0;
        color: ${(props) => props.theme.white};
        background: ${(props) => props.theme.blue};
        cursor: pointer;
        border-radius: 12px;
    }
`;

export const Box = styled.div`
    width: 300px;
    margin: 0 auto;
    text-align: center;

    input {
        border-radius: 12px;
        outline: none;
        border: 1px solid ${(props) => props.theme.border};
    }
`;

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${(props) => props.theme.lightenBlack};
`;

export const CateContent = styled.div`
    max-width: 1060px;
    width: 100%;
    display: flex;
    margin: 0 auto;
`;

export const CateTitle = styled.h2`
    margin: 0;
    margin-bottom: 12px;
    padding: 12px;
    width: 100%;
`;

export const BoardContainer = styled.div`
    margin: 0 auto;
`;

export const BoardBox = styled.div`
    width: 760px;
    height: 130px;
    display: flex;
    justify-content: space-around;
    border: 1px solid ${(props) => props.theme.border};
    background: ${(props) => props.theme.white};
    padding: 12px;
    margin: 24px 0;
`;

export const BoardTitle = styled.div`
    position: relative;
    width: 70%;
    display: flex;
    flex-direction: column;

    & > div:nth-child(1) {
        width: 80%;
        font-size: ${(props) => props.theme.ms};
        margin-right: 3px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;

        a:hover {
            text-decoration: underline;
        }
    }
    svg {
        position: absolute;
        right: 10px;
        top: 0px;
        cursor: pointer;
    }
`;

export const BoardParty = styled.div`
    position: absolute;
    display: flex;
    bottom: 1px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    line-height: 34px;
    & > div {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 6px;

        & > img {
            border: 1px solid ${(props) => props.theme.lightenBlack};
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    span {
        margin-left: 5px;
        line-height: 24px;
        border: 1px solid ${(props) => props.theme.lightenBlack};
        border-radius: 50%;
        width: 40px;
        height: 40px;
        font-size: ${(props) => props.theme.ls};
        cursor: pointer;
        text-align: center;

        &:hover {
            background: ${(props) => props.theme.lightenBlack};
        }
    }
`;

export const BoardInfo = styled.div`
    display: grid;
    position: relative;
    grid-template-columns: repeat(3, 1fr);
    width: 30%;

    & > div {
        text-align: center;
    }

    & > div:nth-child(1) {
        font-size: ${(props) => props.theme.ms};
        position: relative;
        &::before {
            content: "마감";
            width: 96%;
            height: 16px;
            font-size: ${(props) => props.theme.ss};
            position: absolute;
            left: 0;
            top: 25px;
            color: ${(props) => props.theme.white};
            background: ${(props) => props.theme.black};
            border-radius: 12px;
        }
    }
    & > div:nth-child(2) {
        font-size: ${(props) => props.theme.ms};
        position: relative;

        &::before {
            content: "현재";
            width: 96%;
            height: 16px;
            font-size: ${(props) => props.theme.ss};
            position: absolute;
            left: 0;
            top: 25px;
            color: ${(props) => props.theme.white};
            background: ${(props) => props.theme.lightenBlue};
            border-radius: 12px;
        }
    }
    & > div:nth-child(3) {
        position: relative;
        font-size: ${(props) => props.theme.ms};

        &::before {
            content: "제한";
            width: 96%;
            height: 16px;
            font-size: ${(props) => props.theme.ss};
            position: absolute;
            left: 0;
            top: 25px;
            color: ${(props) => props.theme.white};
            background: ${(props) => props.theme.red};
            border-radius: 12px;
        }
    }
`;

export const ProgressBar = styled.div`
    position: absolute;
    bottom: 15px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
`;

export const ProgressBarWrap = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 8px;
    border-radius: 12px;
    background: ${(props) => props.theme.yellow};
`;

export const ProgressGage = styled.div`
    position: absolute;
    bottom: 0;
    height: 8px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    width: ${(props) => `${props.progress}%`};
    z-index: 2;
    background: ${(props) => props.theme.blue};
    ${(props) =>
        props.progress === 100 &&
        css`
            background: ${(props) => props.theme.red};
        `}
`;

export const Finished = styled.div`
    position: absolute;
    bottom: 10px;
    color: ${(props) => props.theme.red};
    right: 0;
`;

export const Progressing = styled.div`
    position: absolute;
    bottom: -20px;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    font-size: ${(props) => props.theme.ss};
`;
