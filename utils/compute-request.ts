import { toast } from '@/components/ui/use-toast'
import { DEFAULT_TOAST_ERROR_MSG } from '@/constants/errors'
import { parseError } from '@/utils/parse-error'

export const computeRequest = async <D>(
  cb: () => Promise<D>,
  errMsg?: string
) => {
  try {
    await cb()
  } catch (error: any) {
    console.log(JSON.stringify(error));
    
    console.log(error.message!);
    
    const e = parseError(error)
    toast({
      title: errMsg || e || DEFAULT_TOAST_ERROR_MSG,
      variant: 'destructive'
    })
  }
}
