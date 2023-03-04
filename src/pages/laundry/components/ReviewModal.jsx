import React from "react";

const ReviewModal = () => {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Give Review
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              X
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">
                  Name:
                </label>
                <input type="text" class="form-control" id="recipient-name" />
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">
                  Stars:
                </label>
                <input
                  type="number"
                  defaultValue="5"
                  max={5}
                  min={1}
                  class="form-control"
                  id="recipient-name"
                />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">
                  Review:
                </label>
                <textarea class="form-control" id="message-text"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="bg-blue-500 py-2.5 px-8 rounded-full">
              Send Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
