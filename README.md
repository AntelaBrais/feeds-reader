# Feeds Reader

"Feeds Reader" is a news aggregator app.

## Usage

To run the app

```bash
npx expo start -c
```

If you want to run the app in a more specific environment run:
For web:

```bash
npx expo start --web
```

For Android

```bash
npx expo start --android
```

For Ios

```bash
npx expo start --ios
```

This project can also be tested on a device with the use of the app "Expo Go". After running the `npx expo start -c` a QR code will show up in the terminal and scanning that QR will load the app on the device.

## Third-party libraries (Why these?)

- **Expo**: With Expo the time to develop and create a React Native app is reduced thanks to its management of app bundling and many native setups done behind the hood.
- **@shopify/flash-list**: This component outperforms the well-known FlatList delivering a better performance (up to 10x more FPS) with the same features. In my opinion, this component is great for infinite scroll pages where memory management and UX are vital.
- **NativeBase**: Has great support from the community, cross-platform support (Web, iOS, Android) and tons of features without being too opinionated.
- **Redux Toolkit**: Allows to adopt the redux pattern being less verbose and with newer features inspired by other great libraries such as React Query.
- Husky Hooks: With the pre-commit hook I ensure I'm always pushing my code following the decided style.
- **Cypress**: Intuitive and developer friendly with lots of features and great documentation. Used by PayPal.
- **GitHub Actions**: I created a minimal CI action that runs the linter rules whenever a Pull Request is made to the main branch, adding an extra layer of feedback loop and security to the code shipped.
- **Gitmoji**: Even if it seems a silly addition, the use of standarized emojis to reflect the intent of each commit could help analyze the most frequent type of changes to the codebases and helps the developer bound the scope of their commits.

## Design Patterns

The main followed approach was DDD, at least its main concept of separation of concerns/layers into domain/application/infrastructure. To improve the project's scalability the folder structure was deeply analyzed to let the project grow without compromising its understandability.

Another concept taken into account was the screaming architecture. The project's structure tries to be as intuitive as possible to any external developer and lets them understand where to find what they want (reducing the cognitive load on the onboarding).

## Next steps

- Merge routing with file-based routing systems: Expo Router & Nextjs
- **Solito**: Universal routing for Expo and Next.js to reduce code duplication.
- **Style System**: UX/UI and accessibility improvement.
- **Multi-provider Wrapper**: Avoid the context hell when too many providers are added to the app.
- **Better DDD implementation**: Application layer with use cases, implementation of the repository pattern to avoid API news providers coupling and so on.
