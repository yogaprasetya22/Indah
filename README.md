# Install the required packages

```bash
composer install && pnpm i && cp .env.example .env && php artisan key:generate && php artisan migrate:fresh --seed
```

