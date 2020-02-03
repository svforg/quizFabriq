function Quiz(options) {

    var quiz = this;
    this.currentStep = 1;

    this.stepsCounter = parseInt(options.stepsCounter) || 3;
    this.triggerBlockStep = parseInt(options.triggerBlockStep) || options.stepsCounter;

    this.stepElementSelector = options.stepElementSelector;
    this.stepElementSelectorHidden = options.stepElementSelectorHidden;

    this.buttonPrev = $(options.buttonPrev);
    this.buttonNext = $(options.buttonNext);

    $(quiz.stepElementSelector)
        .eq(0)
        .css("left", "0");

    this.prevStep = function () {

        --quiz.currentStep;

        quiz.buttonNext.removeAttr("disabled");

        $(quiz.stepElementSelector).removeAttr("style").addClass(quiz.stepElementSelectorHidden);

        $(quiz.stepElementSelector)
            .eq(quiz.currentStep - 1)
            .removeClass(quiz.stepElementSelectorHidden)
            .stop(true, true)
            .animate({
                left: ['0', 'swing'],
                opacity: '1'
            }, 150);

        if (quiz.currentStep === 1) {

            quiz.buttonPrev.attr("disabled", true);
        }
        else {
            quiz.buttonPrev.removeAttr("disabled");
        }
    };

    this.nextStep  = function () {

        ++quiz.currentStep;

        quiz.buttonPrev.removeAttr("disabled");

        $(quiz.stepElementSelector).removeAttr("style").addClass(quiz.stepElementSelectorHidden);

        $(quiz.stepElementSelector)
            .eq(quiz.currentStep - 1)
            .removeClass(quiz.stepElementSelectorHidden)
            .stop(true, true)
            .animate({
                left: ['0', 'swing'],
                opacity: '1'
            }, 150);

        if ( (quiz.currentStep === quiz.stepsCounter)
            || (quiz.currentStep === quiz.triggerBlockStep) ) {

            quiz.buttonNext.attr("disabled", true);
        }
        else {
            quiz.buttonNext.removeAttr("disabled");
        }
    };

    $(quiz.buttonPrev).on("click", function () {
        quiz.prevStep();
    });

    $(quiz.buttonNext).on("click", function () {
        quiz.nextStep();
    });
}
