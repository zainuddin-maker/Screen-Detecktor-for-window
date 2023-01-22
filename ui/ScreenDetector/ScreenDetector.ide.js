TW.IDE.Widgets.ScreenDetector = function () {
    // this.widgetIconUrl = function () {
    //     return "";
    // };

    this.widgetProperties = function () {
        const properties = {
            name: "ScreenDetector",
            description: "ScreenDetector Chart",
            category: ["Common"],
            isExtension: true,
            supportsAutoResize: true,
            properties: {
           
                ScreenHeight: {
                    baseType: "NUMBER",
                    isBindingSource: true,
                },
                ScreenWidth: {
                    baseType: "NUMBER",
                    isBindingSource: true,
                },
         
            },
        };

        return properties;
    };

    this.beforeSetProperty = function (name, value) {
       
    
    

    };

    this.afterSetProperty = function (name, value) {
        this.updatedProperties();
        return true;
    };

    this.afterLoad = function () {};

    this.renderHtml = function () {
        return '<div class="widget-content widget-ScreenDetector"></div>' ;
    };

    this.afterRender = function () {
        this.setupWidget();
    };

    this.setupWidget = function () {

        var widgetID = this.jqElementId;
          console.log("widgetID")
          console.log(widgetID) 

      try {
          var allWidgetProps = this.properties;

          var widgetProps = {};

          for (const [key, value] of Object.entries(allWidgetProps)) {
              if (key.includes("Style")) {
                  widgetProps[key] = TW.getStyleFromStyleDefinition(
                      this.getProperty(key)
                  );
              } else {
                  widgetProps[key] = this.getProperty(key);
              }
          }

          console.log("widgetProps iddle ScreenDetector");
          console.log(widgetProps);
      } catch (error) {
          console.log("error");
          console.log(error);
      }

      console.log("widht screen detector", window.innerWidth)
      console.log("heiht screen detector", window.innerHeight)



        
  
  
  }

    this.widgetServices = function () {
        return {
            clickedEvent: {
                description: "clickedEvent",
            },
       
        };

       
    };

    // this.widgetEvents = function () {
    //     return {
    //         HeightLowerTrigger: {
    //             description:
    //                 "Event triggered when a height reaches trigger height",
    //         },
    //         WidthLowerTrigger: {
    //             description:
    //                 "Event triggered when a width reaches trigger width",
    //         },
    //         HeightWidthLowerTrigger: {
    //             description:
    //                 "Event triggered when a height reaches trigger height or width reaches trigger width",
    //         },
    //     };
    // };
};
