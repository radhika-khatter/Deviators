export const iosResources: {
  name: string;
  desc: string;
  content: {
    head: string;
    links: {
      url?: string;
      title: string;
    }[];
  }[];
  url: string;
}[] = [
  {
    name: "SwiftUI Concept",
    desc: "Discover tips and techniques for building multiplatform apps with this set of conceptual articles and sample code.",
    content: [
      {
        head: "SwiftUI Concepts",
        links: [
          {
            url: "https://developer.apple.com/tutorials/swiftui-concepts#app-principles",
            title: "App principles",
          },
          {
            url: "https://developer.apple.com/tutorials/swiftui-concepts#view-layout",
            title: "View layout",
          },
          {
            url: "https://developer.apple.com/tutorials/swiftui-concepts#state-and-data-flow",
            title: "State and data flow",
          },
        ],
      },
    ],
    url: "https://developer.apple.com/tutorials/swiftui-concepts",
  },
  {
    name: "Develop in Swift",
    desc: "Develop in Swift Tutorials are a great first step toward a career in app development using Xcode, Swift, and SwiftUI.",
    content: [
      {
        head: "SwiftUI foundations",
        links: [
          {
            title: "Explore Xcode",
            url: "https://developer.apple.com/tutorials/develop-in-swift#explore-xcode",
          },
          {
            title: "Views, structures, and properties",
            url: "https://developer.apple.com/tutorials/develop-in-swift#views,-structures,-and-properties",
          },
          {
            title: "Layout and style",
            url: "https://developer.apple.com/tutorials/develop-in-swift#layout-and-style",
          },
          {
            title: "Buttons and state",
            url: "https://developer.apple.com/tutorials/develop-in-swift#buttons-and-state",
          },
          {
            title: "Lists and text fields",
            url: "https://developer.apple.com/tutorials/develop-in-swift#lists-and-text-fields",
          },
        ],
      },
      {
        head: "Data modeling",
        links: [
          {
            title: "NEW: Custom types and Swift Testing",
            url: "https://developer.apple.com/tutorials/develop-in-swift#models-and-persistence",
          },
          {
            title: "Models and persistence",
            url: "https://developer.apple.com/tutorials/develop-in-swift#models-and-persistence",
          },
          {
            title: "NEW: Navigation, editing, and relationships",
            url: "https://developer.apple.com/tutorials/develop-in-swift#new:-navigation,-editing,-and-relationships",
          },
          {
            title: "Observation and shareable data models",
            url: "https://developer.apple.com/tutorials/develop-in-swift#new:-observation-and-shareable-data-models",
          },
        ],
      },
      {
        head: "Spatial computing",
        links: [
          {
            title: "Windows in visionOS",
            url: "https://developer.apple.com/tutorials/develop-in-swift#windows-in-visionos",
          },
          {
            title: "NEW: Ornaments and multiple windows",
            url: "https://developer.apple.com/tutorials/develop-in-swift#new:-ornaments-and-multiple-windows",
          },
          {
            title: "Volumes in visionOS",
            url: "https://developer.apple.com/tutorials/develop-in-swift#volumes-in-visionos",
          },
        ],
      },
    ],
    url: "https://developer.apple.com/tutorials/develop-in-swift",
  },
  {
    name: "Exploring SwiftUI Sample Apps",
    desc: "Explore these SwiftUI samples using Swift Playgrounds on iPad or in Xcode to learn about defining user interfaces, responding to user interactions, and managing data flow.",
    content: [
      {
        head: "Sample Apps",
        links: [
          {
            title: "Navigating Apps",
            url: "https://developer.apple.com/tutorials/sample-apps/#navigating-apps",
          },
          {
            title: "Presenting Content",
            url: "https://developer.apple.com/tutorials/sample-apps/#presenting-content",
          },
          {
            title: "Retrieving Content from a Server",
            url: "https://developer.apple.com/tutorials/sample-apps/#retrieving-content-from-a-server",
          },
          {
            title: "Responding to User Input",
            url: "https://developer.apple.com/tutorials/sample-apps/#responding-to-user-input",
          },
          {
            title: "Capturing and Displaying Photos",
            url: "https://developer.apple.com/tutorials/sample-apps/#capturing-and-displaying-photos",
          },
          {
            title: "Get Started with Machine Learning",
            url: "https://developer.apple.com/tutorials/sample-apps/#responding-to-user-input",
          },
        ],
      },
    ],
    url: "https://developer.apple.com/tutorials/sample-apps",
  },
  {
    name: "Introducing SwiftUI",
    desc: "SwiftUI is a modern way to declare user interfaces for any Apple platform. Create beautiful, dynamic apps faster than ever before.",
    content: [
      {
        head: "SwiftUI Essentials",
        links: [
          {
            title: "SwiftUI essentials",
            url: "https://developer.apple.com/documentation/swiftui",
          },
          {
            title: "Drawing and animation",
            url: "https://developer.apple.com/documentation/swiftui/drawing-and-animation",
          },
          {
            title: "App design and layout",
            url: "https://developer.apple.com/documentation/swiftui/app-design-and-layout",
          },
          {
            title: "Framework integration",
            url: "https://developer.apple.com/documentation/swiftui/framework-integration",
          },
        ],
      },
    ],
    url: "https://developer.apple.com/documentation/swiftui",
  },
  {
    name: "Develop App for Apple Platform",
    desc: "Learn the basics of Xcode, SwiftUI, and UIKit to create compelling apps.",
    content: [
      {
        head: "SwiftUI Essentials",
        links: [
          {
            title: "SwiftUI essentials",
            url: "https://developer.apple.com/documentation/swiftui",
          },
          {
            title: "Views",
            url: "https://developer.apple.com/documentation/swiftui/views",
          },
          {
            title: "Navigation and modal presentation",
            url: "https://developer.apple.com/documentation/swiftui/navigation-and-modal-presentation",
          },
          {
            title: "Passing data",
            url: "https://developer.apple.com/documentation/swiftui/passing-data",
          },
          {
            title: "State management",
            url: "https://developer.apple.com/documentation/swiftui/state-management",
          },
          {
            title: "Persistence and concurrency",
            url: "https://developer.apple.com/documentation/swiftui/persistence-and-concurrency",
          },
          {
            title: "Drawing",
            url: "https://developer.apple.com/documentation/swiftui/drawing",
          },
          {
            title: "Recording audio",
            url: "https://developer.apple.com/documentation/avfoundation/recording-audio",
          },
        ],
      },
      {
        head: "UIKit Essentials",
        links: [
          {
            title: "UIKit essentials",
            url: "https://developer.apple.com/documentation/uikit",
          },
          {
            title: "Collection views and navigation",
            url: "https://developer.apple.com/documentation/uikit/collection-views-and-navigation",
          },
          {
            title: "Making editable views",
            url: "https://developer.apple.com/documentation/uikit/making-editable-views",
          },
          {
            title: "Adding, deleting, and filtering reminders",
            url: "https://developer.apple.com/documentation/eventkit/adding,-deleting,-and-filtering-reminders",
          },
          {
            title: "Custom views and animation",
            url: "https://developer.apple.com/documentation/uikit/custom-views-and-animation",
          },
          {
            title: "System frameworks",
            url: "https://developer.apple.com/documentation/uikit/system-frameworks",
          },
        ],
      },
      {
        head: "macOS Essentials",
        links: [
          {
            title: "macOS essentials",
            url: "https://developer.apple.com/documentation/appkit",
          },
          {
            title: "Navigation",
            url: "https://developer.apple.com/documentation/appkit/navigation",
          },
          {
            title: "SwiftData",
            url: "https://developer.apple.com/documentation/swiftdata",
          },
          {
            title: "Core macOS features",
            url: "https://developer.apple.com/documentation/appkit/core-macos-features",
          },
          {
            title: "Other frameworks",
            url: "https://developer.apple.com/documentation/appkit/other-frameworks",
          },
          {
            title: "Design",
            url: "https://developer.apple.com/design",
          },
          {
            title: "Tests",
            url: "https://developer.apple.com/documentation/xctest",
          },
          {
            title: "Network data",
            url: "https://developer.apple.com/documentation/network",
          },
        ],
      },
    ],
    url: "https://developer.apple.com/documentation/uikit",
  },
  {
    name: "100 Days Challenge of SwiftUI",
    desc: "Welcome to the 100 Days of Swift! This is a free collection of videos, tutorials, tests, and more, all drawn from around my existing work here on Hacking with Swift, and all designed to help you learn Swift.",
    content: [
      {
        head: "100 Days of Swift",
        links: [
          {
            title:
              "SwiftUI 100 Days course is created by the Paul Hudson, and he wrote Hacking with Swift to help you learn to make apps for iOS, macOS, watchOS, and more.",
          },
          {
            title:
              "On this site you can find my free Swift tutorials, lots of other awesome Swift books I wrote, a huge collection of Swift example code, plus Swift news, tips, and tutorials to help take your learning further.",
            url: "https://www.hackingwithswift.com/learn",
          },
        ],
      },
    ],
    url: "https://www.hackingwithswift.com/100",
  },
];
