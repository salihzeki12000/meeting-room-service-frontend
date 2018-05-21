
# meeting-room-service-frontend

This project is the front-end of the Meeting Rooms Services application. 

Is an Angular app and contains the following functionality:

1. Separated view for each meeting room
2. If the meeting room is available or no 
3. The contacts and the times of the next meetings.
4. The availability of the all meetings in one shot and the duration of the availability until the next meeting

## Getting Started

To get you started you can clone the `meeting-room-service-frontend` repository and install the dependencies.

### Prerequisites

You need [git][git] to clone the `meeting-room-service-frontend` repository.

You will need [Node.js][node] and [npm][npm].

### Clone `meeting-room-service-frontend`

Clone the `meeting-room-service-frontend` repository using git:

```bash
git clone https://github.com/systelab/meeting-room-service-frontend.git
cd meeting-room-service-frontend
```

### .Net Core Back-end

The actual version uses a RESTFul API REST developed in .NET Core. 

Clone the [back-end][backend] before execute this front-end.

Set the `BASE_PATH` of the API in the [environment][environment] file.


### Install Dependencies

To install the dependencies you must run:

```bash
npm install
```
### Run

To run the application use the following command:

```bash
ng serve
```

## Test

The tests are not implemented yet, but maybe you can help us to implement the automated tests for the app!

[environment]:https://github.com/systelab/meeting-room-service-frontend/blob/master/src/environments/environment.ts
[backend]: https://github.com/systelab/meeting-room-service-backend
[git]: https://git-scm.com/
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
