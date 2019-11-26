import React, { useState, useEffect } from "react";
import classes from "./ExerciseResult.module.scss";
import { FaTimes, FaCheck, FaClock, FaBullseye } from "react-icons/fa";
import { Button, Modal, OverlayTrigger, Popover } from "react-bootstrap";
import { mockSessionResult } from "../mock-exercises";
import {
  buildStyles,
  CircularProgressbarWithChildren
} from "react-circular-progressbar";

const ExerciseResult = (props) => {
  const [streakProgress, setStreakProgress] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  const sessionResult = mockSessionResult;

  useEffect(() => {
    setStreakProgress(50);
  }, []);

  const getAccuracy = () => {
    const correctCount = sessionResult.correctCount;
    const questionCount = sessionResult.exerciseAnswers.length;
    return Number((correctCount / questionCount) * 100).toFixed(2);
  };

  const handleModalCloseClick = () => {
    setModalShow(false);
  }

  return (
    <div style={{ height: "100vh" }}>
      {/* <div>Test: {userAnswer}</div> */}
      <div className={classes["container"]}>
        <div className={classes["header"]}>
          <h2 style={{ color: "white" }}>
            Chúc mừng bạn đã hoàn thành bài tập!
          </h2>
        </div>
        <div className={classes["result-body"]}>
          <div className={classes["result-table-and-streak-container"]}>
            <div className={classes["result-table-container"]}>
              <div className={classes["result-table"]}>
                <div className={classes["session-info-row"]}>
                  <div className={classes["criteria-name"]}>
                    <span>
                      <FaCheck></FaCheck>
                    </span>
                    Số câu trả lời đúng
                  </div>
                  <div className={classes["user-result"]}>
                    {sessionResult.correctCount}
                  </div>
                  <div className={classes["point"]}>60 pts</div>
                  <div className={classes["line"]}></div>
                </div>
                <div className={classes["session-info-row"]}>
                  <div className={classes["criteria-name"]}>
                    <span>
                      <FaClock></FaClock>
                    </span>
                    Tốc độ
                  </div>
                  <div className={classes["user-result"]}>
                    {sessionResult.timeSpent} giây
                  </div>
                  <div className={classes["point"]}>65 pts</div>
                  <div className={classes["line"]}></div>
                </div>
                <div className={classes["session-info-row"]}>
                  <div className={classes["criteria-name"]}>
                    <span>
                      <FaBullseye></FaBullseye>
                    </span>
                    Độ chính xác
                  </div>
                  <div className={classes["user-result"]}>
                    {getAccuracy()} %
                  </div>
                  <div className={classes["point"]}>80 pts</div>
                  <div className={classes["line"]}></div>
                </div>
                <div className={classes["total-point-row"]}>
                  <div className={classes["text"]}>Tổng điểm</div>
                  <div className={classes["point"]}>205 pts</div>
                </div>
              </div>
            </div>
            <div className={classes["streak-circle-container"]}>
              <h3>Bài học kết thúc! +5 Điểm KN</h3>
              <div className={classes["streak-circle"]}>
                <CircularProgressbarWithChildren
                  value={streakProgress}
                  styles={buildStyles({
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "round",
                    // Text size
                    textSize: "16px",
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 1,
                    // pathTransition: 'none',
                    // Colors
                    pathColor: "#e8962c",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7"
                  })}
                >
                  <div className={classes["main-text"]}>5/10 Exp</div>
                  <div className={classes["sub-text"]}>Mục tiêu hôm nay</div>
                </CircularProgressbarWithChildren>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["footer"]}>
          <div className={classes["unanswered-footer"]}>
            <div className={classes["line"]}></div>
            <div className={classes["unanswered"]}>
              <div className={classes["buttons-container"]}>
                <Button
                  variant="outline-info"
                  size="lg"
                  className={
                    classes["button"] + " " + classes["outline-info-button"]
                  }
                  onClick={() => {
                    setModalShow(true);
                  }}
                >
                  Xem lại bài học
                </Button>
                <Button
                  variant="success"
                  size="lg"
                  className={
                    classes["button"] + " " + classes["success-button"]
                  }
                >
                  Kết thúc bài học
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        size="lg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body>
          <div
            className={classes["close-button"]}
            onClick={handleModalCloseClick}
          >&times;</div>
          <div className={classes["modal-body"]}>
            <h3 style={{ fontWeight: "500" }}>Xem lại bảng điểm của bạn</h3>
            <h4 style={{ fontWeight: "500", opacity: 0.6 }}>
              Nhấp vào ô bên dưới để hiện đáp án
            </h4>
            <div className={classes["answer-container"]}>
              {sessionResult.exerciseAnswers.map(exerciseAnswer => (
                <OverlayTrigger
                  trigger="click"
                  rootClose
                  placement="bottom"
                  overlay={
                    <Popover>
                      <Popover.Content className={classes["popover"]}>
                        <div className={classes["strong-text"]}><strong>Câu trả lời của bạn:</strong></div>
                        <div className={classes["normal-text"]}>{exerciseAnswer.userAnswer}</div>
                        <div className={classes["strong-text"]}><strong>Đáp án đúng:</strong></div>
                        <div className={classes["normal-text"]}>{exerciseAnswer.exercise.answers[0]}</div>
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <div
                    className={
                      classes["answer-card"] + " " 
                      + (exerciseAnswer.isCorrect ? classes["correct-answer-card"] : classes["incorrect-answer-card"])
                    }
                  >
                    <div className={classes["exercise-requirement"]}>
                      {exerciseAnswer.exercise.requirement}
                    </div>
                    <div className={classes["icon-circle"]}>
                      {exerciseAnswer.isCorrect ? (
                        <FaCheck
                          size={12.5}
                          className={classes["icon"]}
                        ></FaCheck>
                      ) : (
                        <FaTimes
                          size={12.5}
                          className={classes["icon"]}
                        ></FaTimes>
                      )}
                    </div>
                    <div className={classes["answer"]}>
                      {exerciseAnswer.userAnswer}
                    </div>
                  </div>
                </OverlayTrigger>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ExerciseResult;
