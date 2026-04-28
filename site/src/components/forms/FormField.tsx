import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ReactNode } from "react"

type BaseProps = {
  label: string
  error?: string
  id: string
  required?: boolean
  hint?: string
}

const inputCls =
  "w-full px-4 py-3 rounded-lg border border-[color:var(--color-brand-border)] bg-[color:var(--color-brand-surface)] text-[color:var(--color-brand-text)] placeholder:text-[color:var(--color-brand-muted)]/70 focus:outline-none focus:border-[color:var(--color-brand-primary)] focus:ring-2 focus:ring-[color:var(--color-brand-primary)]/15 transition"

function Label({ id, children, required }: { id: string; children: ReactNode; required?: boolean }) {
  return (
    <label htmlFor={id} className="block text-sm font-semibold text-[color:var(--color-brand-text)] mb-1.5">
      {children}
      {required && <span className="text-[color:var(--color-brand-secondary)] ml-1">*</span>}
    </label>
  )
}

function ErrorMsg({ error }: { error?: string }) {
  if (!error) return null
  return <p className="mt-1.5 text-xs text-red-600">{error}</p>
}

export function TextField({
  label,
  id,
  error,
  required,
  hint,
  ...rest
}: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label id={id} required={required}>{label}</Label>
      <input id={id} className={inputCls} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} {...rest} />
      {hint && !error && <p className="mt-1.5 text-xs text-[color:var(--color-brand-muted)]">{hint}</p>}
      <ErrorMsg error={error} />
    </div>
  )
}

export function TextareaField({
  label,
  id,
  error,
  required,
  hint,
  ...rest
}: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div>
      <Label id={id} required={required}>{label}</Label>
      <textarea id={id} rows={4} className={inputCls} aria-invalid={!!error} {...rest} />
      {hint && !error && <p className="mt-1.5 text-xs text-[color:var(--color-brand-muted)]">{hint}</p>}
      <ErrorMsg error={error} />
    </div>
  )
}

export function SelectField({
  label,
  id,
  error,
  required,
  hint,
  options,
  ...rest
}: BaseProps & SelectHTMLAttributes<HTMLSelectElement> & { options: string[] }) {
  return (
    <div>
      <Label id={id} required={required}>{label}</Label>
      <select id={id} className={inputCls} aria-invalid={!!error} {...rest}>
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {hint && !error && <p className="mt-1.5 text-xs text-[color:var(--color-brand-muted)]">{hint}</p>}
      <ErrorMsg error={error} />
    </div>
  )
}

export function Honeypot({ register }: { register: { name: string; ref: (el: HTMLInputElement | null) => void; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void } }) {
  return (
    <input
      type="text"
      autoComplete="off"
      tabIndex={-1}
      aria-hidden
      style={{ position: "absolute", left: "-10000px", width: "1px", height: "1px", opacity: 0 }}
      {...register}
    />
  )
}
