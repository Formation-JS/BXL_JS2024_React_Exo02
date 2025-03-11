export default function Price({ value, locale, currency = 'EUR', className }) {
    return (
        <span className={className}>
            {value.toLocaleString(locale, { style: 'currency', currency })}
        </span>
    );
}