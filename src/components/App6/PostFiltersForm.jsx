import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

PostFiltersForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
  onSubmit: null,
};

function PostFiltersForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);

    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = { searchTerm };
      onSubmit(formValues);
    }, 1000);
  }

  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          onChange={handleSearchTermChange}
        />
      </div>
    </form>
  );
}

export default PostFiltersForm;
