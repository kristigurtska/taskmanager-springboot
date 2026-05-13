package com.taskmanager.exception;

public class ErrorResponse {

        private int status;
        private String message;

        public ErrorResponse (int status, String message) {
            this.status = status;
            this.message = message;
        }

        public int GetStatus () {
            return status;
        }

        public String getMessage (){
            return message;
        }
}
