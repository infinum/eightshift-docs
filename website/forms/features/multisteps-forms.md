---
id: multisteps-forms
title: Multi-steps forms
---

By utilizing the multi-step feature, you can craft a wide variety of custom forms. Each form can comprise of numerous steps with fields, validation, and actions. Moreover, you can establish a flow between steps, bypassing certain steps based on the user's input.

We have two types of multi-step forms:
* `Multi-steps form` - The user must pass through all steps to submit the form.
* `Multi-flows form` - The user may skip some steps based on the conditionals created in form settings.

![Multi-steps screen](/img/forms/multisteps.webp)

## Steps block

We now offer a "steps" block for creating multi-step forms. You'll need to add at least one step block to use it. Like the input block, the steps block has a field for defining a unique name. Make sure the name is specific to this step and doesn't include any spaces or special characters.

When you define a step name, you can define a few other options:
* `label` - this is a label that will be displayed in the steps navigation. If this feature is turned off in the form block options, we will show only dots.
* `button labels` - you can define a custom label for each step's next and previous buttons. By default, the next button label is `Next`, and the previous button label is `Previous`.

:::caution
When you add a new step block, every block underneath it will be a part of that step.
:::

:::tip
If you don't add a first step, it will be automatically added with the label "Init."
:::

![Multi-steps steps screen](/img/forms/multisteps-step.webp)

## Multi-steps options

To access multi-step options, click on the 'Form' block and check the options in the sidebar. Note that these options are only available if there are steps in the form.

Available options are:
* `Show progress bar` - This option will add a progress bar to the top of the form, displaying the current and completed steps.
* `Hide progress bar labels` - This option works in combination with the previous one. If you select it, the progress bar will display only the step as a dot without showing the labels for each step.
* `Progress bar initial steps number` - This option allows you to choose the number of steps shown in the progress bar for multi-flow forms.
* `Flow preview` - This option will open a modal window displaying your form's flow preview. It is helpful when you have many steps and want to visualize the flow.
* `Multi-flow` - Enabling this option will transform your form into a multi-flow form.

![Multi-steps options screen](/img/forms/multisteps-options.webp)

## How to create a multi-steps form?

You must add at least one step block to create a multi-step form. This will give you two steps on your form. You can configure additional flow options in the form block sidebar.

## How to create a multi-flow form?

You must include at least one step block to create a multi-step form. Then, go to the multi-flow options in the form block sidebar and select the "multi-flow" option. The purpose of this option is to modify the flow of the user's experience. If you don't define flow corrections, your form will function as a multi-step form and progress to the next available step.

:::caution
If you change the step name after the flow is defined, you will need to reconfigure the flow.
:::

To begin, you must establish the correlation between the flows. This involves defining the "start step" and "end step" and configuring the rules as you would for conditional tags.

The progress bar can only be displayed as dots instead of labels when using the multi-flow form. This is because it is impossible to predict where the user will go next, making it difficult to show the correct flow number. However, you can manually add the number of available steps after each flow rule. In the initial step, you can define this number in the form block options.

Additionally, there is an option to turn off the "next" button for a particular step. This can be useful for creating a step where the user can only go back and not progress to the next step.

![Multi-steps flow screen](/img/forms/multisteps-flow.webp)

We highly recommend using the preview option to test your form's behavior and various user flows.

![Multi-steps preview screen](/img/forms/multisteps-preview.webp)

:::caution
If no flow changes the form flow, a form will behave like a multi-steps form.
:::
