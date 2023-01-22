TW.Runtime.Widgets.ScreenDetector = function () {
    this.renderHtml = function () {
        return '<div class="widget-content widget-ScreenDetector"></div>' ;
    };



    this.updateProperty = function (updatePropertyInfo) {
        // TargetProperty tells you which of your bound properties changed

        this.setProperty(
            updatePropertyInfo.TargetProperty,
            updatePropertyInfo.SinglePropertyValue
        );


        this.setupWidget();
    };

    this.afterRender = function () {
        this.setupWidget();
    };



    this.serviceInvoked = function (serviceName) {


        console.log("service invoked ScrennDetector")
       
        this.setProperty("ScreenWidth",  window.innerWidth);
        this.setProperty("ScreenHeight", window.innerHeight);
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

            console.log("widgetProps running ScreenDetector after click");
            console.log(widgetProps);
        } catch (error) {
            console.log("error");
            console.log(error);
        }

       
      
   


      
    };

   
    this.setupWidget = function () {

          var widgetID = this.jqElementId;
          

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

            console.log("widgetProps running ScreenDetector");
            console.log(widgetProps);
        } catch (error) {
            console.log("error");
            console.log(error);
        }

        console.log("widht screen detector", window.innerWidth)
        console.log("heiht screen detector", window.innerHeight)

        this.setProperty("ScreenWidth",  window.innerWidth);
        this.setProperty("ScreenHeight", window.innerHeight);

          
    
    
    }

};
