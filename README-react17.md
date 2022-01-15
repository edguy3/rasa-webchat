
some notes on recent package upgrade -
Have run tests, but, not field tested yet.
- etg3


$ ncu -i

✔ Do you want to upgrade: react-markdown ^5.0.3 → ^7.1.2? … no
    - V6 detects a nested button issue - reports during a tooltip test
    Might be a real issue in code.


✔ Do you want to upgrade: socket.io ^3.1.2 → ^4.4.1? … no
✔ Do you want to upgrade: socket.io-client ^3.1.2 → ^4.4.1? … no

    - Leave as must be compatible with server.

✔ Do you want to upgrade: clean-webpack-plugin ^0.1.19 → ^4.0.0? … no
    - config syntax changed.

✔ Do you want to upgrade: jest ^26.0.0 → ^27.4.7? … no
    - fails tests.
