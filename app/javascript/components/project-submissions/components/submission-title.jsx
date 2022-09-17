import React from "react";
import { object, bool } from "prop-types";

const SubmissionTitle = ({ submission, isDashboardView }) => {
  if (isDashboardView) {
    return <a href={submission.lesson_path}>{submission.lesson_title}</a>;
  }
  return <a href="/">{submission.user_name}</a>;
};

SubmissionTitle.defaultProps = {
  isDashboardView: false,
  isCurrentUsersSubmission: false,
};

SubmissionTitle.propTypes = {
  submission: object.isRequired,
  isDashboardView: bool,
  isCurrentUsersSubmission: bool,
};

export default SubmissionTitle;
