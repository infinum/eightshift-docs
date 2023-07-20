---
id: jira
title: Jira
---

### ES_API_KEY_JIRA

This variable will set the Jira integration API key.

```php
define('ES_API_KEY_JIRA', '<api-key>');
```

### ES_API_BOARD_JIRA

This variable will set the Jira integration board ID. The board should be assigned to the API key set with `ES_API_KEY_JIRA`.

```php
define('ES_API_BOARD_JIRA', '<api-board-key>');
```

### ES_API_USER_JIRA

This variable will set the Jira integration user ID. The user should be assigned to the API key set with `ES_API_KEY_JIRA` and should have the permission to edit the board set with `ES_API_BOARD_JIRA`.

```php
define('ES_API_USER_JIRA', '<api-user-key>');
```
