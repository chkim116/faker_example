import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { ImFire } from "react-icons/im";
import {
    BoardBox,
    BoardContainer,
    BoardInfo,
    BoardParty,
    BoardTitle,
    Box,
    Button,
    CateContent,
    CateTitle,
    Container,
    Finished,
    ProgressBar,
    ProgressBarWrap,
    ProgressGage,
    Progressing,
} from "./style";

const Presenter = ({
    boards,
    checkPercent,
    limitNumberOfPeople,
    onRefresh,
    onChange,
    number,
}) => {
    console.log(boards);

    return (
        <Container>
            <Button>
                <button onClick={onRefresh}>refreshBtn</button>
            </Button>
            <Box>
                <input
                    onChange={onChange}
                    value={number}
                    maximum="150"
                    type="number"
                />
            </Box>
            {boards && boards.length > 0 ? (
                <>
                    <CateContent>
                        <BoardContainer>
                            <CateTitle>FAKER</CateTitle>
                            {boards.map((board) => (
                                <BoardBox key={board.id}>
                                    <BoardTitle>
                                        <div>
                                            <strong>{board.title}</strong>
                                        </div>
                                        <p>{board.desc}</p>
                                        <BsStarFill size={18} fill="white" />
                                        <BsStar size={18} />
                                        <BoardParty>
                                            {board.participateUsers
                                                .slice(0, 5)
                                                .map((user, index) => (
                                                    <div key={index}>
                                                        <img
                                                            src={user.img}
                                                            alt="user"
                                                        />
                                                    </div>
                                                ))}
                                            {board.participateUsers.length >
                                                5 && <span>...</span>}
                                        </BoardParty>
                                    </BoardTitle>
                                    <BoardInfo>
                                        <div>{board.deadline}</div>
                                        <div>
                                            {board.participateUsers.length}
                                        </div>
                                        <div>{board.limitNumberOfPeople}</div>
                                        <ProgressBar>
                                            <ProgressBarWrap></ProgressBarWrap>
                                            <ProgressGage
                                                progress={Math.round(
                                                    (board.participateUsers
                                                        .length /
                                                        limitNumberOfPeople) *
                                                        100
                                                )}>
                                                {/* 이곳 조건문은 후에 finishcheck가 되면 수정 */}
                                                {board.participateUsers
                                                    .length ===
                                                    board.limitNumberOfPeople && (
                                                    <Finished>
                                                        <ImFire />
                                                    </Finished>
                                                )}
                                            </ProgressGage>
                                            {board.participateUsers.length ===
                                                board.limitNumberOfPeople || (
                                                <Progressing>
                                                    {checkPercent(
                                                        Math.round(
                                                            (board
                                                                .participateUsers
                                                                .length /
                                                                limitNumberOfPeople) *
                                                                100
                                                        )
                                                    )}
                                                </Progressing>
                                            )}
                                        </ProgressBar>
                                    </BoardInfo>
                                </BoardBox>
                            ))}
                        </BoardContainer>
                    </CateContent>
                </>
            ) : (
                <div
                    style={{
                        margin: "0 auto",
                        width: "100%",
                        fontSize: "20px",
                        textAlign: "center",
                    }}>
                    input창에 숫자 입력
                </div>
            )}
        </Container>
    );
};

export default Presenter;
