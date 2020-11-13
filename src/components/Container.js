import React, { useCallback, useEffect, useState } from "react";
import Presenter from "./Presenter";
import faker from "faker";

const Container = () => {
    // faker data
    const [boards, setBoards] = useState();
    const [number, setNumber] = useState(0);

    const createUser = () => {
        return {
            img: faker.image.avatar(),
        };
    };
    const limitNumberOfPeople = 8;
    const participateUsers = () => {
        return Math.round(Math.random() * limitNumberOfPeople);
    };
    const createBoard = () => {
        return {
            id: faker.random.uuid(),
            title: faker.lorem.sentence(),
            desc: faker.lorem.words(),
            deadline: faker.date.weekday(),
            participateUsers: new Array(participateUsers())
                .fill(undefined)
                .map(createUser),
            limitNumberOfPeople,
        };
    };
    const createBoards = (numUsers) => {
        return new Array(numUsers).fill(undefined).map(createBoard);
    };

    // valid
    const checkPercent = (percent) => {
        if (percent > 90) {
            return "Last!";
        }
        if (percent > 70) {
            return "Come HERE!!";
        }
        if (percent > 50) {
            return "Hurry Up!";
        }
        if (percent > 5) {
            return "I Need You..";
        }
        if (percent === 0) {
            return "Help ME!!";
        }
    };

    const onChange = useCallback(
        (e) => {
            const { value } = e.target;
            if (value > 150) {
                setNumber(150);
            } else {
                setNumber(e.target.value);
            }
        },
        [number]
    );

    const onRefresh = useCallback((e) => {
        setNumber("");
    }, []);

    useEffect(() => {
        setBoards(createBoards(number ? parseInt(number) : 0));
    }, [number]);

    return (
        <Presenter
            onChange={onChange}
            onRefresh={onRefresh}
            boards={boards}
            checkPercent={checkPercent}
            number={number}
            limitNumberOfPeople={limitNumberOfPeople}></Presenter>
    );
};

export default Container;
